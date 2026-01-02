import { useState, useEffect } from "react";
import { ThumbsUp, MessageCircle, Send, Trash2, Pencil, MoreHorizontal, CornerDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Comment {
    id: string;
    name: string;
    headline?: string;
    text: string;
    date: string; // Ideally relative time (e.g. "2h ago")
    isAdmin?: boolean;
    replies?: Comment[];
    likes: number;
    isLiked: boolean;
}

interface BlogInteractionProps {
    slug: string;
}

interface CommentItemProps {
    comment: Comment;
    isReply?: boolean;
    editingCommentId: string | null;
    editText: string;
    onEditChange: (val: string) => void;
    onReplyChange: (id: string, val: string) => void;
    onStartEdit: (comment: Comment) => void;
    onCancelEdit: () => void;
    onSaveEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onLike: (id: string) => void;
    onToggleReply: (id: string) => void;
    onSubmitReply: (id: string) => void;
    showReplyInput: { [key: string]: boolean };
    replyText: { [key: string]: string };
}

const CommentItem = ({
    comment,
    isReply = false,
    editingCommentId,
    editText,
    onEditChange,
    onReplyChange,
    onStartEdit,
    onCancelEdit,
    onSaveEdit,
    onDelete,
    onLike,
    onToggleReply,
    onSubmitReply,
    showReplyInput,
    replyText
}: CommentItemProps) => {
    return (
        <div className={`flex gap-3 ${isReply ? "mt-4" : "mt-6"}`}>
            {/* Avatar Column */}
            <div className="flex-shrink-0">
                <Avatar className="w-10 h-10 border border-border/50">
                    {comment.isAdmin ? (
                        <AvatarFallback className="bg-primary text-primary-foreground font-bold">CX</AvatarFallback>
                    ) : (
                        <>
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${comment.name}`} />
                            <AvatarFallback>{comment.name[0]}</AvatarFallback>
                        </>
                    )}
                </Avatar>
            </div>

            {/* Content Column */}
            <div className="flex-grow min-w-0">
                {/* Header: Name & Headline & Actions */}
                <div className="bg-secondary/10 rounded-r-xl rounded-bl-xl p-3 pr-2 relative group">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="text-sm font-semibold text-foreground hover:underline hover:text-primary cursor-pointer transition-colors">
                                    {comment.name}
                                </h4>
                                {comment.isAdmin && (
                                    <span className="bg-primary/10 text-primary text-[10px] px-1.5 py-0 rounded font-medium">Author</span>
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground truncate max-w-[200px] md:max-w-md">
                                {comment.headline || "Industry Professional"}
                            </p>
                            <p className="text-[10px] text-muted-foreground/70 mt-0.5">{comment.date}</p>
                        </div>

                        {/* More Options (Edit/Delete) */}
                        {editingCommentId !== comment.id && (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => onStartEdit(comment)} className="gap-2 cursor-pointer">
                                        <Pencil className="w-3 h-3" /> Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => onDelete(comment.id)} className="gap-2 text-red-500 focus:text-red-500 cursor-pointer">
                                        <Trash2 className="w-3 h-3" /> Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>

                    {/* Comment Body */}
                    <div className="mt-2 text-sm text-foreground/90 leading-relaxed break-words">
                        {editingCommentId === comment.id ? (
                            <div className="mt-2">
                                <Textarea
                                    value={editText}
                                    onChange={(e) => onEditChange(e.target.value)}
                                    className="min-h-[80px] text-sm mb-2 bg-background"
                                />
                                <div className="flex justify-end gap-2">
                                    <Button variant="ghost" size="sm" onClick={onCancelEdit} className="h-7 text-xs">Cancel</Button>
                                    <Button size="sm" onClick={() => onSaveEdit(comment.id)} className="h-7 text-xs">Save</Button>
                                </div>
                            </div>
                        ) : (
                            <p className="whitespace-pre-wrap">{comment.text}</p>
                        )}
                    </div>
                </div>

                {/* Footer Actions (Like | Reply | Likes Count) */}
                <div className="flex items-center gap-4 mt-1 ml-1">
                    <button
                        onClick={() => onLike(comment.id)}
                        className={`flex items-center gap-1.5 text-xs font-semibold px-1 py-1 rounded hover:bg-secondary/50 transition-colors ${comment.isLiked ? "text-blue-600" : "text-muted-foreground/80 hover:text-blue-600"}`}
                    >
                        <ThumbsUp className={`w-3.5 h-3.5 ${comment.isLiked ? "fill-current" : ""}`} />
                        <span>Like</span>
                    </button>

                    {!isReply && (
                        <button
                            onClick={() => onToggleReply(comment.id)}
                            className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground/80 hover:text-foreground px-1 py-1 rounded hover:bg-secondary/50 transition-colors"
                        >
                            <span>Reply</span>
                        </button>
                    )}

                    {/* Likes Count Indicator */}
                    {comment.likes > 0 && (
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground ml-auto">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-0.5 rounded-full">
                                <ThumbsUp className="w-2 h-2 text-blue-600 dark:text-blue-400 fill-current" />
                            </div>
                            <span>{comment.likes}</span>
                        </div>
                    )}
                </div>

                {/* Reply Input */}
                {showReplyInput[comment.id] && (
                    <div className="mt-3 flex gap-3 animate-in fade-in slide-in-from-top-1">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=Admin`} />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                            <Textarea
                                value={replyText[comment.id] || ""}
                                onChange={(e) => onReplyChange(comment.id, e.target.value)}
                                placeholder="Add a reply..."
                                className="min-h-[60px] text-sm mb-2"
                                autoFocus
                            />
                            <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="sm" className="h-7 text-xs" onClick={() => onToggleReply(comment.id)}>Cancel</Button>
                                <Button size="sm" className="h-7 text-xs rounded-full" onClick={() => onSubmitReply(comment.id)} disabled={!replyText[comment.id]?.trim()}>Reply</Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Nested Replies */}
                {comment.replies && comment.replies.length > 0 && (
                    <div className="pl-4 border-l-2 border-border/30 ml-2">
                        {comment.replies.map((reply) => (
                            <CommentItem
                                key={reply.id}
                                comment={reply}
                                isReply={true}
                                editingCommentId={editingCommentId}
                                editText={editText}
                                onEditChange={onEditChange}
                                onReplyChange={onReplyChange}
                                onStartEdit={onStartEdit}
                                onCancelEdit={onCancelEdit}
                                onSaveEdit={onSaveEdit}
                                onDelete={onDelete}
                                onLike={onLike}
                                onToggleReply={onToggleReply}
                                onSubmitReply={onSubmitReply}
                                showReplyInput={showReplyInput}
                                replyText={replyText}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const BlogInteraction = ({ slug }: BlogInteractionProps) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState("");
    const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
    const [showReplyInput, setShowReplyInput] = useState<{ [key: string]: boolean }>({});

    // Edit State
    const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
    const [editText, setEditText] = useState("");

    // Pseudo-random headlines for realistic feel
    const headlines = [
        "Senior Software Engineer",
        "Product Designer",
        "Founder @ Startup",
        "Tech Enthusiast",
        "Frontend Developer",
        "CTO",
        "Design Lead",
        "Full Stack Developer"
    ];

    const getRandomHeadline = () => headlines[Math.floor(Math.random() * headlines.length)];

    // Load state from localStorage on mount
    useEffect(() => {
        const storageKey = `blog_${slug}`;
        const storedData = localStorage.getItem(storageKey);

        if (storedData) {
            const { likes, comments, isLiked } = JSON.parse(storedData);
            setLikes(likes || 0);
            setComments(comments || []);
            setIsLiked(isLiked || false);
        } else {
            const randomLikes = Math.floor(Math.random() * 50) + 10;
            setLikes(randomLikes);
        }
    }, [slug]);

    // Persist state
    useEffect(() => {
        const storageKey = `blog_${slug}`;
        const dataToStore = { likes, comments, isLiked };
        localStorage.setItem(storageKey, JSON.stringify(dataToStore));
    }, [likes, comments, isLiked, slug]);

    // --- Helper Functions for Recursive Updates ---

    const recursiveUpdate = (
        items: Comment[],
        targetId: string,
        updater: (item: Comment) => Comment
    ): Comment[] => {
        return items.map((item) => {
            if (item.id === targetId) {
                return updater(item);
            }
            if (item.replies && item.replies.length > 0) {
                return { ...item, replies: recursiveUpdate(item.replies, targetId, updater) };
            }
            return item;
        });
    };

    const recursiveDelete = (items: Comment[], targetId: string): Comment[] => {
        return items
            .filter((item) => item.id !== targetId)
            .map((item) => {
                if (item.replies && item.replies.length > 0) {
                    return { ...item, replies: recursiveDelete(item.replies, targetId) };
                }
                return item;
            });
    };

    const recursiveAddReply = (items: Comment[], parentId: string, reply: Comment): Comment[] => {
        return items.map((item) => {
            if (item.id === parentId) {
                return { ...item, replies: [...(item.replies || []), reply] };
            }
            if (item.replies && item.replies.length > 0) {
                return { ...item, replies: recursiveAddReply(item.replies, parentId, reply) };
            }
            return item;
        });
    };

    // --- Handlers ---

    const handlePageLike = () => {
        if (isLiked) {
            setLikes((prev) => prev - 1);
            setIsLiked(false);
        } else {
            setLikes((prev) => prev + 1);
            setIsLiked(true);
        }
    };

    const handlePostComment = () => {
        if (!newComment.trim()) return;
        const comment: Comment = {
            id: Date.now().toString(),
            name: "Guest User",
            headline: getRandomHeadline(),
            text: newComment,
            date: "Just now",
            replies: [],
            likes: 0,
            isLiked: false,
        };
        setComments((prev) => [comment, ...prev]);
        setNewComment("");
    };

    const handleCommentLike = (commentId: string) => {
        setComments((prev) =>
            recursiveUpdate(prev, commentId, (c) => ({
                ...c,
                likes: c.isLiked ? c.likes - 1 : c.likes + 1,
                isLiked: !c.isLiked,
            }))
        );
    };

    const handleDelete = (commentId: string) => {
        if (window.confirm("Delete this comment?")) {
            setComments((prev) => recursiveDelete(prev, commentId));
        }
    };

    const startEditing = (comment: Comment) => {
        setEditingCommentId(comment.id);
        setEditText(comment.text);
    };

    const cancelEditing = () => {
        setEditingCommentId(null);
        setEditText("");
    };

    const saveEdit = (commentId: string) => {
        if (!editText.trim()) return;
        setComments((prev) =>
            recursiveUpdate(prev, commentId, (c) => ({ ...c, text: editText }))
        );
        setEditingCommentId(null);
        setEditText("");
    };

    const handleReplySubmit = (commentId: string) => {
        const text = replyText[commentId];
        if (!text?.trim()) return;

        const reply: Comment = {
            id: Date.now().toString(),
            name: "CreativynX Admin",
            headline: "Community Manager",
            text: text,
            date: "Just now",
            isAdmin: true,
            replies: [],
            likes: 0,
            isLiked: false,
        };

        setComments((prev) => recursiveAddReply(prev, commentId, reply));
        setReplyText((prev) => ({ ...prev, [commentId]: "" }));
        setShowReplyInput((prev) => ({ ...prev, [commentId]: false }));
    };

    const toggleReplyInput = (commentId: string) => {
        setShowReplyInput((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
    };

    const handleReplyChange = (id: string, val: string) => {
        setReplyText((prev) => ({ ...prev, [id]: val }));
    };

    return (
        <div className="border-t border-border pt-6 mt-12 bg-card rounded-xl p-6 shadow-sm border">
            {/* Interaction Bar */}
            <div className="flex items-center gap-4 mb-6">
                <Button
                    variant="ghost"
                    onClick={handlePageLike}
                    className={`gap-2 transition-colors ${isLiked ? "text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100" : "text-muted-foreground hover:bg-secondary"}`}
                >
                    <ThumbsUp className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                    <span className="font-semibold">{likes}</span>
                    <span className="hidden sm:inline">Likes</span>
                </Button>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">{comments.reduce((acc, c) => acc + 1 + (c.replies?.length || 0), 0)}</span>
                    <span className="hidden sm:inline">Comments</span>
                </div>
            </div>

            {/* Main Input Area */}
            <div className="flex gap-4 mb-8">
                <Avatar className="w-10 h-10 border border-border">
                    <AvatarFallback className="bg-primary text-primary-foreground font-bold">GU</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                    <div className="relative">
                        <Textarea
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="min-h-[100px] resize-none border-border/60 focus:border-primary/50 transition-all text-base rounded-xl pr-12"
                        />
                        <Button
                            size="icon"
                            className="absolute bottom-3 right-3 rounded-full h-8 w-8 transition-transform hover:scale-105 active:scale-95"
                            onClick={handlePostComment}
                            disabled={!newComment.trim()}
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Comments List */}
            <div className="space-y-2">
                {comments.length === 0 ? (
                    <div className="text-center py-10 bg-secondary/10 rounded-xl border border-dashed border-border/50">
                        <MessageCircle className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                        <p className="text-muted-foreground font-medium">No comments yet</p>
                        <p className="text-xs text-muted-foreground/70">Be the first to start the conversation</p>
                    </div>
                ) : (
                    comments.map((comment) => (
                        <CommentItem
                            key={comment.id}
                            comment={comment}
                            editingCommentId={editingCommentId}
                            editText={editText}
                            onEditChange={setEditText}
                            onReplyChange={handleReplyChange}
                            onStartEdit={startEditing}
                            onCancelEdit={cancelEditing}
                            onSaveEdit={saveEdit}
                            onDelete={handleDelete}
                            onLike={handleCommentLike}
                            onToggleReply={toggleReplyInput}
                            onSubmitReply={handleReplySubmit}
                            showReplyInput={showReplyInput}
                            replyText={replyText}
                        />
                    ))
                )}
            </div>
        </div>
    );
};
export default BlogInteraction;
