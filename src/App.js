import logo from './logo.svg';
import './App.css';

function App() {
 return (
  <div className="App">
    <header className="App-header">
      <div className='head'>
        <a href="link address">
         <button>
            Главная
          </button>
            </a>
        <a href="link address">
          <button>
            О компании
          </button>
            </a>
        <a href="link address">
          <button>
            Проекты
          </button>
            </a>
        <a href="link address">
          <button>
            Услуги
          </button>
            </a>
        <a href="link address">
          <button>
            Контакты
          </button>
            </a>
      </div>
        <logo>
        <img src={"./logo (1).png"} />
        </logo>
      </header>
      
      <main>
      <div id='project'>
        <h1>Проекты нашей компании</h1>
      </div>
      <div id="parent">
	  <div id="div1">  
  <a href="link address">
    <img src="./project-1.jpg" alt="React Image" />
    </a>
  <div className="text_">
    <span id='proect'>
      <h1>Название проекта</h1>
      </span>
      <br/> 
</div>
  </div>
	<div id="div2">
  <a href="link address">
    <img src="./project-2.jpg" alt="React Image" />
    </a>
  <a href="link address">
     <div className="text_">
      <span id='bolee'>
        <h1>Более длинное название проекта</h1>
        </span>
        <br/> 
  </div>
 </a>
  </div>
	<div id="div3">
  <a href="link address">
    <img src="./project-3.jpg" alt="React Image" />
    </a>
  <div className="text_">
    <span id='naz'>
      <h1>Название</h1>
      </span>
      <br/> 
</div>
  </div>
	<div id="div4">
  <a href="link address">
    <img src="./project-4.jpg" alt="React Image" />
    </a>
    <a href="link address"> 
    <div className="text_">
    <span id='spn'>
      <h1>Одно из названий одного из проектов</h1>
      </span>
      <br/> 
</div>
</a>
 </div>
	<div id="div5">
  <a href="link address">
    <img src="./project-5.jpg" alt="React Image" /></a>
  <a href="link address">
    <div className="text_">
      <span id='naz2'>
        <h1>Название-2</h1>
        </span>
        <br/> 
</div>
</a>
 
  </div>
	<div id="div6">
  <a href="link address">
     <img src="./project-6.jpg" alt="React Image" />
     </a>
  <a href="link address">
    <div className="text_">
      <span id='naim'>
        <h1>Наименование<br/> проекта
        </h1>
        </span>
        <br/> 
</div>
</a>

  </div>
	<div id="div7">
  <a href="link address">
    <img src="./project-7.jpg" alt="React Image" /></a>
  <a href="link address">
     <div className="text_">
      <span id='krt'>
        <h1>Короткое<br/> большое
         <br/>название
         </h1>
        </span>
        <br/> 
</div></a>
 </div>
</div>
  </main>
  <footer>
      <div className='Sdt'>
      <div className='logo'>
        <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>
       <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title/>
      <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602 1.17c.79.25 1.24-.499 1.99-1.299l1.4-1.58c3.85.32 6.8-.419 7.14-.529.78-.25 5.181-.811 5.901-6.652.74-6.031-.36-9.831-2.34-11.551l-.01-.002c-.6-.55-3-2.3-8.37-2.32 0 0-.396-.025-1.038-.016zm.067 1.697c.545-.003.88.02.88.02 4.54.01 6.711 1.38 7.221 1.84 1.67 1.429 2.528 4.856 1.9 9.892-.6 4.88-4.17 5.19-4.83 5.4-.28.09-2.88.73-6.152.52 0 0-2.439 2.941-3.199 3.701-.12.13-.26.17-.35.15-.13-.03-.17-.19-.16-.41l.02-4.019c-4.771-1.32-4.491-6.302-4.441-8.902.06-2.6.55-4.732 2-6.172 1.957-1.77 5.475-2.01 7.11-2.02zm.36 2.6a.299.299 0 0 0-.3.299.3.3 0 0 0 .3.3 5.631 5.631 0 0 1 4.03 1.59c1.09 1.06 1.621 2.48 1.641 4.34a.3.3 0 0 0 .3.3v-.009a.3.3 0 0 0 .3-.3 6.451 6.451 0 0 0-1.81-4.76c-1.19-1.16-2.692-1.76-4.462-1.76zm-3.954.69a.955.955 0 0 0-.615.12h-.012c-.41.24-.788.54-1.148.94-.27.32-.421.639-.461.949a1.24 1.24 0 0 0 .05.541l.02.01a13.722 13.722 0 0 0 1.2 2.6 15.383 15.383 0 0 0 2.32 3.171l.03.04.04.03.03.03.03.03a15.603 15.603 0 0 0 3.18 2.33c1.32.72 2.122 1.06 2.602 1.2v.01c.14.04.268.06.398.06a1.84 1.84 0 0 0 1.102-.472c.39-.35.7-.738.93-1.148v-.01c.23-.43.15-.841-.18-1.121a13.632 13.632 0 0 0-2.15-1.54c-.51-.28-1.03-.11-1.24.17l-.45.569c-.23.28-.65.24-.65.24l-.012.01c-3.12-.8-3.95-3.959-3.95-3.959s-.04-.43.25-.65l.56-.45c.27-.22.46-.74.17-1.25a13.522 13.522 0 0 0-1.54-2.15.843.843 0 0 0-.504-.3zm4.473.89a.3.3 0 0 0 .002.6 3.78 3.78 0 0 1 2.65 1.15 3.5 3.5 0 0 1 .9 2.57.3.3 0 0 0 .3.299l.01.012a.3.3 0 0 0 .3-.301c.03-1.19-.34-2.19-1.07-2.99-.73-.8-1.75-1.25-3.05-1.34a.3.3 0 0 0-.042 0zm.49 1.619a.305.305 0 0 0-.018.611c.99.05 1.47.55 1.53 1.58a.3.3 0 0 0 .3.29h.01a.3.3 0 0 0 .29-.32c-.07-1.34-.8-2.091-2.1-2.161a.305.305 0 0 0-.012 0z"/></svg>
       <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1227" viewBox="0 0 1200 1227" fill="none">
      <g clip-path="url(#clip0_1_2)"><path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="black"/></g><defs><clipPath id="clip0_1_2"><rect width="1200" height="1227" fill="white"/></clipPath></defs></svg>
      </div>
      <div className='contact'>
        <h1>info@company.com
        </h1>
        <h1>+7 495 123-45-67
        </h1>
      </div>
      <div className='contact2'>
        <h1>2022  ©  OOO "Компания"
        </h1>
      </div>
      </div>
      </footer>
    </div>
  );
}
export default App;
