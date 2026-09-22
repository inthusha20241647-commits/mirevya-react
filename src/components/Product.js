import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

function Product() {
  return (
    <div className="Products">
      <div class="box">
        <img src={image1}></img>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
          blanditiis ratione culpa aperiam! Voluptatem quidem fugit illum et
          rerum, omnis vel asperiores provident saepe incidunt unde sequi, est
          nostrum accusamus!
        </p>
      </div>

      <div className="box">
        <img src={image2}></img>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
          blanditiis ratione culpa aperiam! Voluptatem quidem fugit illum et
          rerum, omnis vel asperiores provident saepe incidunt unde sequi, est
          nostrum accusamus!
        </p>
      </div>

      <div className="box">
        <img src={image3}></img>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
          blanditiis ratione culpa aperiam! Voluptatem quidem fugit illum et
          rerum, omnis vel asperiores provident saepe incidunt unde sequi, est
          nostrum accusamus!
        </p>
      </div>
    </div>
  );
}
export default Product;
