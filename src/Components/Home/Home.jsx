import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='homeContainer'>
        <div className='left'>
            <h2 className='heading'>WElcome to Ijepas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores laborum a enim consectetur voluptates maxime fugit quidem iusto, eaque corporis iste veniam officiis tempore sunt deserunt quo necessitatibus asperiores repellat repudiandae animi rerum fuga hic. Rem nemo explicabo doloribus aspernatur nulla omnis impedit? Iusto illo aut non ipsum, quos vel facilis, debitis ad consectetur possimus id est magnam distinctio voluptatibus perferendis totam. Dolorum quisquam est nulla rerum, dignissimos veniam at eveniet, facere, vel cumque distinctio eius facilis eum atque! Laudantium in assumenda tenetur quibusdam vitae, soluta laboriosam numquam praesentium corrupti rem dicta sapiente nihil aut! Consequatur repudiandae iste deserunt voluptates!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus dignissimos numquam assumenda quaerat quia accusamus possimus dolorum omnis natus. Voluptatem vel perspiciatis porro eum laborum neque distinctio nam commodi tenetur rem id, amet laboriosam voluptatum repellendus libero minus voluptatibus cum ratione? Natus provident in tempora, quae molestiae veniam autem dolores magni exercitationem quidem cum vel, officiis, enim labore voluptatibus optio id. Blanditiis dolores ratione natus iusto laudantium, unde possimus error perferendis facere voluptatum est inventore hic neque quas veniam et ea, porro ipsa odio obcaecati, impedit accusantium consectetur sed optio. Veritatis rerum ex recusandae iure cumque, quaerat repellat ea?

            </p>
            <Link to="#">(...more)</Link>
        </div>
        <div>
            <Link to="#"><img src="data:image/jpeg;base64,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" alt="" /></Link>
            <div>
                <h3>Latest News</h3>
                <Link to="#"><p>Lorem ipsum dolor sit amet.</p></Link>
                <span>Date Here</span>
                <Link to="#"><p>Lorem ipsum dolor sit amet.</p></Link>
                <span>Date Here</span>
            </div>
        </div>
    </div>
  )
}

export default Home