'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Tag, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface BlogPost {
    id: number;
    titleKey: string;
    excerptKey: string;
    contentKey: string;
    date: string;
    readTime: string;
    category: string;
    categoryColor: string;
    gradient: string;
    emoji: string;
}

const Blog: React.FC = () => {
    const { t } = useLanguage();
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const posts: BlogPost[] = [
        {
            id: 1,
            titleKey: 'blog.post1.title',
            excerptKey: 'blog.post1.excerpt',
            contentKey: 'blog.post1.content',
            date: '2025-03-15',
            readTime: '5 min',
            category: 'Web3',
            categoryColor: 'text-purple-400 bg-purple-500/20',
            gradient: 'from-purple-500/20 to-blue-500/10',
            emoji: '⛓️'
        },
        {
            id: 2,
            titleKey: 'blog.post2.title',
            excerptKey: 'blog.post2.excerpt',
            contentKey: 'blog.post2.content',
            date: '2025-02-28',
            readTime: '4 min',
            category: 'Frontend',
            categoryColor: 'text-blue-400 bg-blue-500/20',
            gradient: 'from-blue-500/20 to-cyan-500/10',
            emoji: '🎨'
        },
        {
            id: 3,
            titleKey: 'blog.post3.title',
            excerptKey: 'blog.post3.excerpt',
            contentKey: 'blog.post3.content',
            date: '2025-02-10',
            readTime: '6 min',
            category: 'Telecomunicaciones',
            categoryColor: 'text-cyan-400 bg-cyan-500/20',
            gradient: 'from-cyan-500/20 to-green-500/10',
            emoji: '📡'
        }
    ];

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    // Vista de artículo individual
    if (selectedPost) {
        return (
            <section id="blog" className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <button
                        onClick={() => setSelectedPost(null)}
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-8 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        {t('blog.back')}
                    </button>

                    <div className={`bg-gradient-to-br ${selectedPost.gradient} rounded-2xl p-8 border border-slate-700 mb-8`}>
                        <span className="text-5xl mb-4 block">{selectedPost.emoji}</span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${selectedPost.categoryColor} mb-4 inline-block`}>
                            {selectedPost.category}
                        </span>
                        <h1 className="text-3xl font-bold text-white mb-4">{t(selectedPost.titleKey)}</h1>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {formatDate(selectedPost.date)}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock size={14} />
                                {selectedPost.readTime} {t('blog.read')}
                            </span>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                        <div className="text-gray-300 leading-relaxed space-y-4 text-lg">
                            {t(selectedPost.contentKey).split('\n').map((paragraph: string, i: number) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Vista de lista de artículos
    return (
        <section id="blog" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 text-center">{t('blog.title')}</h2>
                <p className="text-gray-400 text-center mb-12">{t('blog.subtitle')}</p>

                {/* Post destacado */}
                <div
                    className={`bg-gradient-to-br ${posts[0].gradient} rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all cursor-pointer mb-8 group`}
                    onClick={() => setSelectedPost(posts[0])}
                >
                    <div className="flex items-start justify-between mb-4">
                        <span className="text-4xl">{posts[0].emoji}</span>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${posts[0].categoryColor}`}>
                            {posts[0].category}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {t(posts[0].titleKey)}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{t(posts[0].excerptKey)}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {formatDate(posts[0].date)}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock size={14} />
                                {posts[0].readTime} {t('blog.read')}
                            </span>
                        </div>
                        <span className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                            {t('blog.readMore')} <ChevronRight size={16} />
                        </span>
                    </div>
                </div>

                {/* Posts secundarios */}
                <div className="grid md:grid-cols-2 gap-6">
                    {posts.slice(1).map((post) => (
                        <div
                            key={post.id}
                            className={`bg-gradient-to-br ${post.gradient} rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all cursor-pointer group`}
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className="text-3xl">{post.emoji}</span>
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${post.categoryColor}`}>
                                    {post.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {t(post.titleKey)}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                                {t(post.excerptKey)}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-gray-500 text-xs">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {formatDate(post.date)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} />
                                        {post.readTime} {t('blog.read')}
                                    </span>
                                </div>
                                <span className="flex items-center gap-1 text-blue-400 text-xs font-medium group-hover:gap-2 transition-all">
                                    {t('blog.readMore')} <ChevronRight size={14} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;