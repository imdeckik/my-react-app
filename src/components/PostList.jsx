import { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-400 text-lg">
        Loading posts...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest posts</h2>
      <div className="flex flex-col gap-4">
        {posts.map(function (post) {
          return (
            <div
              key={post.id}
              className="bg-white border border-gray-100 rounded-xl p-6"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-2 capitalize">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {post.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostList;
