import React, { useState } from 'react';
import { Image, Send, ThumbsUp, MessageCircle, Share, MoreHorizontal } from 'lucide-react';

export default function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Jordan Lee',
      role: 'Software Engineer at Flowstack',
      avatar: 'gradient',
      time: '2h',
      content:
        'Shipped a small DX improvement today: previews now boot in under 2s. Loving the energy of this team! 🚀',
      image: '',
      likes: 42,
      comments: 9,
    },
    {
      id: 2,
      author: 'Sofia Ramirez',
      role: 'Product Marketing @ Aurora',
      avatar: 'gradient',
      time: '6h',
      content:
        'Design <> Marketing sync notes: tell the story, reduce friction, keep the magic. New launch next week ✨',
      image: '',
      likes: 88,
      comments: 23,
    },
  ]);

  const [text, setText] = useState('');

  const submitPost = () => {
    if (!text.trim()) return;
    const newPost = {
      id: Date.now(),
      author: 'Alex Morgan',
      role: 'Product Designer',
      avatar: 'gradient',
      time: 'Just now',
      content: text.trim(),
      image: '',
      likes: 0,
      comments: 0,
    };
    setPosts([newPost, ...posts]);
    setText('');
  };

  return (
    <div className="space-y-4">
      <Composer text={text} setText={setText} submitPost={submitPost} />
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}

function Composer({ text, setText, submitPost }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur p-4">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400" />
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start a post..."
            className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600/40 min-h-[70px]"
          />
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs hover:bg-slate-800 transition">
                <Image className="h-4 w-4 text-cyan-300" />
                Media
              </button>
            </div>
            <button
              onClick={submitPost}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-600/20 disabled:opacity-50"
              disabled={!text.trim()}
            >
              <Send className="h-4 w-4" />
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-600 to-fuchsia-500" />
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm font-semibold text-slate-200">{post.author}</h4>
                <p className="text-xs text-slate-400">{post.role} • {post.time}</p>
              </div>
              <button className="text-slate-400 hover:text-slate-200">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-3 text-sm text-slate-200">{post.content}</p>
          </div>
        </div>
      </div>
      {post.image ? (
        <div className="bg-slate-800/40">
          {/* image could be placed here */}
        </div>
      ) : null}
      <div className="px-4 py-2 text-xs text-slate-400">
        {post.likes} likes • {post.comments} comments
      </div>
      <div className="flex items-center justify-between px-2 py-1 border-t border-slate-800 text-slate-300">
        <ActionButton icon={<ThumbsUp className="h-4 w-4" />} label="Like" />
        <ActionButton icon={<MessageCircle className="h-4 w-4" />} label="Comment" />
        <ActionButton icon={<Share className="h-4 w-4" />} label="Share" />
      </div>
    </article>
  );
}

function ActionButton({ icon, label }) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-800/60 transition text-xs">
      {icon}
      <span>{label}</span>
    </button>
  );
}
