import './App.css';
const initial_book_List=[
  {
    Name:"ponniyin selvan",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yc_is5frPpXppDwRbiZZiq1AjCetq-l4cTDD1iVE&s",
    ratings:10,
    summary:"In the 10th century, Emperor Sundara Chozhar of the Chola Dynasty reigns prosperously in South India while his sons Aditha Karikalan and Arulmozhi Varman aka Ponniyin Selvan are heading their conquests respectively for the empire at Kanchi and Lanka."
  },
  {
    Name:"Vikram",
    poster:"https://images.news18.com/ibnlive/uploads/2022/07/kamal-haasan-vikram-1.jpg",
    ratings:9,
    summary:"Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj. Lokesh Kanagaraj and Rathna Kumar worked together on the dialogues in this film. It is produced by Kamal Haasan who stars in the titlular role, along with Vijay Sethupathi and Fahadh Faasil with Narain and Kalidas Jayaram in the supporting roles. A spiritual successor of the 1986 film of the same name, it is the second installment in the Lokesh Cinematic Universe following Kaithi (2019). "
  },
  {
    Name:"leo",
    poster:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw0.peakpx.com%2Fwallpaper%2F611%2F712%2FHD-wallpaper-ps-thalapathy-leo-poster-vijay-actor.jpg&tbnid=2wnQ1K3ZyHRvcM&vet=12ahUKEwjHrZOw5-j-AhW7ndgFHWMhDS4QMygEegUIARC_AQ..i&imgrefurl=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-wkywa&docid=Gy2eoiEIS2Hu5M&w=800&h=1422&q=leo%20vijay%20images&ved=2ahUKEwjHrZOw5-j-AhW7ndgFHWMhDS4QMygEegUIARC_AQ",
    ratings:10,
    summary:"leo prosperously in South India while his sons Aditha Karikalan and Arulmozhi Varman aka Ponniyin Selvan are heading their conquests respectively for the empire at Kanchi and Lanka."
  },
  {
    Name:"varisu",
    poster:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt11998558%2F&psig=AOvVaw2ZHBGf-OK2lTcakRfLb3sw&ust=1683741280648000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCynJnn6P4CFQAAAAAdAAAAABAE",
    ratings:7,
    summary:"family based film there was a 3 children they will be separated for money and ego jealous between them atlast they realised family "
  },
  {
    Name:"thunivu",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yc_is5frPpXppDwRbiZZiq1AjCetq-l4cTDD1iVE&s",
    ratings:8,
    summary:"In the 10th century, Emperor Sundara Chozhar of the Chola Dynasty reigns prosperously in South India while his sons Aditha Karikalan and Arulmozhi Varman aka Ponniyin Selvan are heading their conquests respectively for the empire at Kanchi and Lanka."
  },
  {
    Name:"sarpattaparambra",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yc_is5frPpXppDwRbiZZiq1AjCetq-l4cTDD1iVE&s",
    ratings:10,
    summary:"In the 10th century, Emperor Sundara Chozhar of the Chola Dynasty reigns prosperously in South India while his sons Aditha Karikalan and Arulmozhi Varman aka Ponniyin Selvan are heading their conquests respectively for the empire at Kanchi and Lanka."
  },
  {
    Name:"Avathar",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yc_is5frPpXppDwRbiZZiq1AjCetq-l4cTDD1iVE&s",
    ratings:10,
    summary:"In the 10th century, Emperor Sundara Chozhar of the Chola Dynasty reigns prosperously in South India while his sons Aditha Karikalan and Arulmozhi Varman aka Ponniyin Selvan are heading their conquests respectively for the empire at Kanchi and Lanka."
  },
  {
    Name:"the avengers",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yc_is5frPpXppDwRbiZZiq1AjCetq-l4cTDD1iVE&s",
    ratings:9,
    summary:"In the 10th century, Emperor Sundara Chozhar of the Chola Dynasty reigns prosperously in South India while his sons Aditha Karikalan and Arulmozhi Varman aka Ponniyin Selvan are heading their conquests respectively for the empire at Kanchi and Lanka."
  },
  {
    Name:"meramaid",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yc_is5frPpXppDwRbiZZiq1AjCetq-l4cTDD1iVE&s",
    ratings:8.5,
    summary:"In the 10th century, Emperor Sundara Chozhar of the Chola Dynasty reigns prosperously in South India while his sons Aditha Karikalan and Arulmozhi Varman aka Ponniyin Selvan are heading their conquests respectively for the empire at Kanchi and Lanka."
  },
  {
    Name:"fairy tale",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yc_is5frPpXppDwRbiZZiq1AjCetq-l4cTDD1iVE&s",
    ratings:9.5,
    summary:"In the 10th century, Emperor Sundara Chozhar of the Chola Dynasty reigns prosperously in South India while his sons Aditha Karikalan and Arulmozhi Varman aka Ponniyin Selvan are heading their conquests respectively for the empire at Kanchi and Lanka."
  },
  {
    Name:"vikram vedha",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Yc_is5frPpXppDwRbiZZiq1AjCetq-l4cTDD1iVE&s",
    ratings:10,
    summary:"In the 10th century, Emperor Sundara Chozhar of the Chola Dynasty reigns prosperously in South India while his sons Aditha Karikalan and Arulmozhi Varman aka Ponniyin Selvan are heading their conquests respectively for the empire at Kanchi and Lanka."
  }
]

function App() {
  
  const BookList=initial_book_List;
  return (
    <div className="App">
{BookList.map((bk)=>
<Book book={bk}/>)}

    </div>
  );
}
function Book({book}){

  return(
    <div className='book-card'>
            <img src={Book.poster} className="book-image" alt={book.Name}/>

      <div className='book-title'>
      <h2 className='book-name'>{book.Name}</h2>
      <p className='book-ratings'>{book.ratings}</p>
      </div>
      <p className='book-summary'>{book.summary}</p>

      


    </div>
  );

}
export default App;
