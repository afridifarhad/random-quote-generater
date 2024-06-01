import React, {useState} from 'react';
import './index.css'
import './App.css'

function App() {

  const [randomQuote, setRandomQuote] = useState("Life is what happens when you're busy making other plans. - John Lennon")
  const [count, setCount] = useState (0)
  
  const quotes = ["One day, all your hard work will pay off.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Two roads diverged in a wood, and I— I took the one less traveled by, And that has made all the difference. - Robert Frost",
  "Three things cannot be long hidden: the sun, the moon, and the truth. - Buddha",
  "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. - Abraham Lincoln",
  "Give me six hours to chop down a tree and I will spend the first four sharpening the axe. - Abraham Lincoln",
  "Seven days without laughter makes one weak.",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "A journey of a thousand miles begins with a single step. - Lao Tzu",
  "Ten years from now, make sure you can say that you chose your life, you didn't settle for it.",
  "You have to expect things of yourself before you can do them. - Michael Jordan",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Eighty percent of success is showing up. - Woody Allen",
  "A good friend is like a four-leaf clover; hard to find and lucky to have.",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "Take risks: if you win, you will be happy; if you lose, you will be wise. - Anonymous",
  "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. - Mark Twain",
  "A person who never made a mistake never tried anything new. - Albert Einstein",
  "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "Two heads are better than one.",
  "One small positive thought in the morning can change your whole day.",
  "Every day may not be good, but there's something good in every day.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "One of the most beautiful qualities of true friendship is to understand and to be understood. - Seneca",
  "You only live once, but if you do it right, once is enough. - Mae West",
  "Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard",
  "He who has a why to live can bear almost any how. - Friedrich Nietzsche",
  "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
  "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change."
];

function handleChange () {

  const randomIndex = Math.floor(Math.random() * quotes.length)
  setRandomQuote(quotes[randomIndex])
  handleCount();
}
 function handleCount () {
   setCount(count + 1)
 }


  return (
    <div className='container'>
      <h1>Random Quote Generater</h1>

      <h3>{randomQuote}</h3>

      <button onClick={handleChange}> Quote Generater</button>
      <h4>Generate {count} time...</h4>
    </div>
  )
}

export default App;
