import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ArticleDetail = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState([]);

  const fetchArticle = () => {
    axios
      .get(`${process.env.REACT_APP_URL}api/react/article/${articleId}`)
      .then((res) => setArticle(res.data.article))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchArticle();
  }, []);
  // console.log("articleId", article);
  //   {
  //   "author": "escape",
  //   "content": "這是內容",
  //   "create_at": 1555459220,
  //   "description": "文章內容",
  //   "id": "-MwQZ1P-8ur-z_jIAPCA",
  //   "image": "test.testtest",
  //   "isPublic": true,
  //   "tag": [
  //     "tag1"
  //   ],
  //   "title": "新增第一篇文章"
  // }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title">文章內容</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    文章名稱
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={article.content}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    文章作者
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    value={article.author}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    文章描述
                  </label>
                  <textarea
                    className="form-control"
                    id="content"
                    value={article.description}
                  />
                </div>
                <div className="row gx-1 mb-3">
                  <div className="col-md-2 mb-1">
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        className="form-control form-control"
                        id="tag"
                        placeholder="請輸入標籤"
                        value={article.tag}
                      />
                      <button type="button" className="btn btn-outline-danger">
                        x
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="card-title">文章圖片</h5>
            </div>
            <div className="card-body">
              <img src={article.image} alt="article-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
