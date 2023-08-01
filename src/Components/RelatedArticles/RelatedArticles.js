import "./RelatedArticles.css";
import { lists } from "./RelatedArticlesList";

function RelatedArticles() {
  return (
 <div>
    
      {lists.map((list)=>(
        <div>

      
        
      <section>

      
        <h4 className="title">THE LATEST AND GREATEST</h4>
      </section>
      <section className="image">
        <img
          className="img1"
          src={list.image}
          alt=""
          style={{ width: "15rem", height: "15rem" }}
        />
      </section>
      <div className="head">
        <h3 className="head-1">{list.title}</h3>
      </div>
      <div>
        <p className="intro">
          {list.content}
        </p>
      </div>
      </div>
      ))}
 


     
     
      <section>
        <button className="viewmore-btn">VIEW MORE RECENT POSTS</button>
      </section>
      <section>
        <div className="blog">
          <div className="blog-content">
            <p className="textname">HI! I'M LINDSAY.</p>
            <p className="textwelcome">nice to meet you</p>
            <p className="text">
              I’m a former 4th grade teacher, now full time blogger. My husband
              Bjork and I live in Minnesota. Favorite things include my camera,
              lake days, and dark chocolate.
            </p>
          </div>
          
          <div className="images">
            <img
              className="image1"
              src="https://pinchofyum.com/wp-content/assets/images/home-lindsay-kitchen-380x480.jpg"
            />
           
           
            </div>
            <div className="images">
            <img
              className="image2"
              src="https://pinchofyum.com/wp-content/assets/images/home-lindsay-pour-380x480.jpg"
            />
            </div>
          
        </div>
      </section>
      
    </div>
  );
}

export default RelatedArticles;
