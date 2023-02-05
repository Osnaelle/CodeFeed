import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';
import { PostProps } from './components/Post';

interface Posts extends PostProps {
  id: number
}

const posts: Posts[]= [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/osnaelle.png',
      name: 'Osnaelle Farias',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite da Rocketseat. O nome do projeto é codeFeed 🚀' },
      { type: 'link', content: 'osnaelle.design/codefeed' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://i.postimg.cc/rFTbW72W/avatar.jpg',
      name: 'Juciara Silva',
      role: 'Design'
    },
    content: [
      { type: 'paragraph', content: 'Heeeey 🚀' },
      { type: 'paragraph', content: 'Mais um projeto de design dessa vez de um player de música inteligente!! Não deixe de conferir abaixo: ' },
      { type: 'link', content: 'juh.design/playerMusic' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}