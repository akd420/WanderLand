const CommentCard = () => {
  return (
    <div className="mt-12">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header mb-2">
          Obi-Wan Kenobi
        </div>
        <div className="chat-bubble bg-grn">You were the Chosen One!</div>
      </div>
    </div>
  );
};

export default CommentCard;
