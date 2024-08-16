import React from "react";

export default function Mui() {
  return (
    <div>
      {post.map((singlePost, index) => {
        return (
          <div class="post-area" key={index}>
            <div class="post-main">
              <div class="post-header">
                <div class="post-left-header">
                  <div class="post-image">
                    <img
                      src="https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                      alt=""
                    />
                  </div>
                  <p class="post-username">{postUsers[singlePost.userid]}</p>
                  <i class="fa-solid fa-certificate"></i>
                  <span class="one-day"> . 1h </span>
                </div>
                <i class="fa-solid fa-grip-lines"></i>
              </div>
              <div class="post-main-image">
                <img
                  src={singlePost.image}
                  alt=""
                  // style={{  }}
                />
              </div>
              <div class="post-fotter">
                <div class="post-fotter-left">
                  <i
                    class="fa-regular fa-heart"
                    onClick={() => handleLike(singlePost.id)}
                  ></i>

                  <i class="fa-regular fa-message"></i>
                  <i class="fa-regular fa-paper-plane"></i>
                </div>
                <i class="fa-regular fa-bookmark"></i>
              </div>
              <div class="post-description">
                <p class="post-liked">Likes {singlePost.likes?.length || 0}</p>
                <p class="post-title">
                  <span>{singlePost.title} </span>
                  <br />
                  {singlePost.description}
                  {/* <br /> more */}
                </p>
                <p class="comments"> view all comments</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
