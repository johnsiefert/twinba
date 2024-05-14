import { tweetsData } from './data.js';

const tweetInput = document.querySelector('#tweet-input');
const tweetBtn = document.querySelector('#tweet-btn');

tweetBtn.addEventListener('click', Input);

function Input() {
  console.log(tweetInput.value);
  tweetInput.value = '';
}

document.addEventListener('click', function (e) {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
  } else if (e.target.dataset.retweets) {
    handleRetweetClick(e.target.dataset.retweets);
  }
});

function handleLikeClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetTweetObj.isLiked) {
    targetTweetObj.likes--;
  } else {
    targetTweetObj.likes++;
  }

  targetTweetObj.isLiked = !targetTweetObj.isLiked;
  renderTweet();
}

function handleRetweetClick(tweetId) {
  const targetRetweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetRetweetObj.isRetweeted) {
    targetRetweetObj.retweets--;
  } else {
    targetRetweetObj.retweets++;
  }
  targetRetweetObj.isRetweeted = !targetRetweetObj.isRetweeted;
  renderTweet();
}

function getFeedHtml() {
  let feedHtml = ``;
  tweetsData.forEach(function (tweet) {
    feedHtml += `<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart" data-like="${tweet.uuid}"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet" data-retweets="${tweet.uuid}"></i>
                    ${tweet.retweets}
                </span>
            </div>
        </div>
    </div>
</div>
 `;
  });
  return feedHtml;
}

function renderTweet() {
  document.querySelector('#feed').innerHTML = getFeedHtml();
}
renderTweet();
