// components/Gallery.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export interface GalleryImage {
    src: string;
    alt: string;
    description: string;
    category?: string;
}

interface GalleryProps {
    jorgeImages?: GalleryImage[];
    juanImages?: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ jorgeImages = [], juanImages = [] }) => {
    const { t, profile } = useLanguage();
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Filter is keyed to the profile — stored as "profile:category" so switching
    // profiles automatically invalidates any previous category selection
    const [filterKey, setFilterKey] = useState(`${profile}:all`);

    const images = profile === 'jorge' ? jorgeImages : juanImages;

    // The active category for the current profile (falls back to 'all' if profile changed)
    const activeFilter = filterKey.startsWith(`${profile}:`)
        ? filterKey.split(':')[1]
        : 'all';

    const filtered = activeFilter === 'all'
        ? images
        : images.filter(img => img.category === activeFilter);

    const filteredLength = filtered.length;

    const wrap = (i: number) =>
        ((i % Math.max(filteredLength, 1)) + Math.max(filteredLength, 1)) % Math.max(filteredLength, 1);

    const selectFilter = (cat: string) => {
        setFilterKey(`${profile}:${cat}`);
        setLightboxIndex(null);
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'ArrowLeft')  setLightboxIndex(i => wrap((i ?? 0) - 1));
            if (e.key === 'ArrowRight') setLightboxIndex(i => wrap((i ?? 0) + 1));
            if (e.key === 'Escape')     setLightboxIndex(null);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex, filteredLength]);

    // ── Early return after all hooks ─────────────────────────────────────────
    if (images.length === 0) return null;

    const categories = [
        'all',
        ...Array.from(new Set(images.map(img => img.category).filter(Boolean) as string[]))
    ];
    const activeLightboxImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

    return (
        <>
            <section id="gallery" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Images className="text-blue-400" size={32} />
                            <h2 className="text-4xl font-bold">{t('gallery.title')}</h2>
                        </div>
                        <p className="text-gray-400">{t('gallery.subtitle')}</p>
                        <p className="text-sm text-gray-500 mt-1">
                            {filteredLength} {filteredLength === 1 ? t('gallery.item') : t('gallery.items')}
                        </p>
                    </div>

                    {/* Category filters — only shown if there are 2+ categories */}
                    {categories.length > 2 && (
                        <div className="flex flex-wrap justify-center gap-2 mb-10">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => selectFilter(cat)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                                        activeFilter === cat
                                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                                            : 'bg-slate-800 text-gray-400 border border-slate-700 hover:border-blue-500/50 hover:text-blue-400'
                                    }`}
                                >
                                    {cat === 'all' ? t('gallery.filter.all') : cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Masonry-style grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {filtered.map((img, idx) => (
                            <div
                                key={`${img.src}-${idx}`}
                                className="break-inside-avoid group relative overflow-hidden rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer bg-slate-800/50"
                                onClick={() => setLightboxIndex(idx)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            {img.category && (
                                                <span className="text-xs text-blue-400 font-medium mb-1 block">
                                                    {img.category}
                                                </span>
                                            )}
                                            <p className="text-white text-sm font-medium leading-snug">{img.alt}</p>
                                            {img.description && (
                                                <p className="text-gray-300 text-xs mt-1 leading-relaxed line-clamp-2">
                                                    {img.description}
                                                </p>
                                            )}
                                        </div>
                                        <ZoomIn size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Lightbox ────────────────────────────────────────────────────── */}
            {activeLightboxImage && lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setLightboxIndex(null)}
                >
                    <button
                        className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors z-10"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <X size={22} />
                    </button>

                    <span className="absolute top-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
                        {lightboxIndex + 1} / {filteredLength}
                    </span>

                    {filteredLength > 1 && (
                        <button
                            className="absolute left-4 p-2 rounded-full bg-slate-800/80 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors z-10"
                            onClick={e => { e.stopPropagation(); setLightboxIndex(i => wrap((i ?? 0) - 1)); }}
                        >
                            <ChevronLeft size={26} />
                        </button>
                    )}

                    <div
                        className="max-w-4xl w-full flex flex-col items-center gap-4"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={activeLightboxImage.src}
                            alt={activeLightboxImage.alt}
                            className="max-h-[70vh] w-auto rounded-xl object-contain shadow-2xl"
                        />
                        <div className="text-center">
                            {activeLightboxImage.category && (
                                <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                                    {activeLightboxImage.category}
                                </span>
                            )}
                            <p className="text-white font-semibold mt-1">{activeLightboxImage.alt}</p>
                            {activeLightboxImage.description && (
                                <p className="text-gray-400 text-sm mt-1 max-w-xl mx-auto leading-relaxed">
                                    {activeLightboxImage.description}
                                </p>
                            )}
                        </div>
                    </div>

                    {filteredLength > 1 && (
                        <button
                            className="absolute right-4 p-2 rounded-full bg-slate-800/80 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors z-10"
                            onClick={e => { e.stopPropagation(); setLightboxIndex(i => wrap((i ?? 0) + 1)); }}
                        >
                            <ChevronRight size={26} />
                        </button>
                    )}
                </div>
            )}
        </>
    );
};

export default Gallery;