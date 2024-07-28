// src/components/Application.jsx
import React, { useState, useEffect } from 'react';

const Article = ({ article }) => {
  if (!article) {
    return <p>Loading article...</p>;
  }

  return (
    <div className="bg-blue-800 p-6 rounded-lg w-full shadow-lg mb-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-yellow-400">{article.author}</h2>
      <p className="text-gray-400 mb-4">{new Date(article.date).toLocaleString()}</p>
      <p className="text-gray-200">{article.text}</p>
    </div>
  );
};

const Comments = ({ comments }) => {
  return (
    <div className="w-full mb-8">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className="bg-gray-700 p-4 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-bold text-yellow-300">{comment.author}</h3>
            <p className="text-gray-200">{comment.text}</p>
            <small className="text-gray-400">{new Date(comment.date).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>Loading comments...</p>
      )}
    </div>
  );
};

const Application = () => {
  const [article, setArticle] = useState(null);
  const [initialComments, setInitialComments] = useState([]);
  const [olderComments, setOlderComments] = useState([]);
  const [showOlderComments, setShowOlderComments] = useState(false);

  useEffect(() => {
    setArticle(document.__article);
  }, []);

  useEffect(() => {
    const allComments = [
      ...(document.__comments || []),
      ...(document.__moreComments || [])
    ];
    const sortedComments = allComments.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Split sorted comments into initial and older comments
    setInitialComments(sortedComments.slice(0, 2));
    setOlderComments(sortedComments.slice(2));
  }, []);

  const handleShowOlderComments = () => {
    setShowOlderComments(true);
  };

  return (
    <div className="p-6 w-full flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400">Article</h1>
      <Article article={article} />

      <h2 className="text-4xl font-bold mb-6 text-center text-yellow-400">Comments</h2>
      <Comments comments={initialComments} />

      {showOlderComments && (
        <Comments comments={olderComments} />
      )}

      {!showOlderComments && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowOlderComments}
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500"
          >
            Load More Comments
          </button>
        </div>
      )}
    </div>
  );
};

export default Application;
