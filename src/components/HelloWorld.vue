// <div class="song_wrapper" ref="song_wrapper">
//         <ul class="song_list">
//           <li v-for="(item,index) in musicList" :key="index">
//             <!-- 点击放歌 -->
//             <a href="javascript:;" @click="playMusic(item.id)">按钮</a>
//             <b>{{item.name}}</b>
//             <span>
//               <i @click="playMv(item.mvid)" v-if="item.mvid!=0">视频</i>
//             </span>
//           </li>
//         </ul>
//         <img src="images/line.png" class="switch_btn" alt />
//       </div>