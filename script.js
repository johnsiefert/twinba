import { tweetsData } from './data.js';

const tweetInput = document.querySelector('#tweet-input');
const tweetBtn = document.querySelector('#tweet-btn');

tweetBtn.addEventListener('click', Input);

function Input() {
  console.log(tweetInput.value);
  tweetInput.value = '';
}

function getFeedHtml() {
  for (let tweet of tweetsData) {
    const feedHtml = `<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    ${tweet.replies}
                </span>
                <span class="tweet-detail">
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    ${tweet.retweets}
                </span>
            </div>
        </div>
    </div>
</div>
 `;
    console.log(feedHtml);
  }
}
getFeedHtml();
