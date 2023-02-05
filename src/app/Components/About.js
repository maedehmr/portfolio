

export default function About() {
return(
    <section
    name="home"
    className="flex flex-col lg:flex-row items-center lg:h-screen h-full home"
  >
    <div className="lg:w-3/5 w-full mt-8">
      <h1 className="text-4xl mb-8 text-slate-900">
        برنامه نویس فرانت اند
      </h1>
      <p className=" text-lg w-full lg:w-7/8 text-slate-600">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
        استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
        در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
        نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
        جامعه و متخصصان را می طلبد
      </p>
      <div className="flex justify-center lg:justify-start mt-10">
        <img
          className="ml-14"
          src="./img/linkedin-svgrepo-com.svg"
          alt=""
          width="65px"
        />
        <img
          className="ml-14"
          src="./img/github-svgrepo-com (1).svg"
          alt=""
          width="65px"
        />
        <img
          className="ml-14"
          src="./img/dribbble-svgrepo-com.svg"
          alt=""
          width="65px"
        />
      </div>
    </div>
    <div className="w-2/5 flex justify-end order-first lg:order-last">
      <img src="./img/girl.png" alt="" width="400px" />
    </div>
  </section>
)
}