// import React from 'react';
// import Assets from '../assets/Assets';
// import { Link } from 'react-router-dom';

// const SinglePostPage = () => {
//   return (
//     <div className='flex flex-col gap-8'>
//       {/* details */}
//       <div className='flex gap-8'>
//         <div className='flex flex-col'>
//           {/* title */}
//           <h1 className='text-5xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, excepturi.</h1>
//           <div className='flex items-center gap-2 text-gray-400 text-sm'>
//             <span>Written by</span>
//             <Link>Jon dev</Link>
//             <span>on</span>
//             <Link>Web Design</Link>
//             <span>4 days ago</span>
//           </div>

//           {/* desc */}
//           <p className='text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure rem tenetur provident placeat explicabo molestias?</p>
//         </div>
//         <div className='w-2/5'>
//           <img src={Assets.Spider} alt="" />
//         </div>
//       </div>

//       {/* content */}
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* text */}
//         <div className='flex flex-col gap-6 text-justify'>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam, deleniti maxime ratione numquam alias quae, suscipit ea nemo laborum earum quos et iste odio quo delectus molestiae accusantium ducimus cumque! Ut id est ullam, recusandae magni quas beatae deserunt at sed quis rerum minus fuga consectetur sequi, facilis nostrum, officia saepe assumenda? Reprehenderit explicabo nostrum illo, sequi omnis praesentium voluptatum nemo magni nihil velit doloribus modi, expedita soluta blanditiis minima repudiandae eaque accusantium culpa nesciunt iusto. Qui esse tempore excepturi porro dolor perspiciatis asperiores, aliquam, soluta, expedita itaque aperiam!</p>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam, deleniti maxime ratione numquam alias quae, suscipit ea nemo laborum earum quos et iste odio quo delectus molestiae accusantium ducimus cumque! Ut id est ullam, recusandae magni quas beatae deserunt at sed quis rerum minus fuga consectetur sequi, facilis nostrum, officia saepe assumenda? Reprehenderit explicabo nostrum illo, sequi omnis praesentium voluptatum nemo magni nihil velit doloribus modi, expedita soluta blanditiis minima repudiandae eaque accusantium culpa nesciunt iusto. Qui esse tempore excepturi porro dolor perspiciatis asperiores, aliquam, soluta, expedita itaque aperiam!</p>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam, deleniti maxime ratione numquam alias quae, suscipit ea nemo laborum earum quos et iste odio quo delectus molestiae accusantium ducimus cumque! Ut id est ullam, recusandae magni quas beatae deserunt at sed quis rerum minus fuga consectetur sequi, facilis nostrum, officia saepe assumenda? Reprehenderit explicabo nostrum illo, sequi omnis praesentium voluptatum nemo magni nihil velit doloribus modi, expedita soluta blanditiis minima repudiandae eaque accusantium culpa nesciunt iusto. Qui esse tempore excepturi porro dolor perspiciatis asperiores, aliquam, soluta, expedita itaque aperiam!</p>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam, deleniti maxime ratione numquam alias quae, suscipit ea nemo laborum earum quos et iste odio quo delectus molestiae accusantium ducimus cumque! Ut id est ullam, recusandae magni quas beatae deserunt at sed quis rerum minus fuga consectetur sequi, facilis nostrum, officia saepe assumenda? Reprehenderit explicabo nostrum illo, sequi omnis praesentium voluptatum nemo magni nihil velit doloribus modi, expedita soluta blanditiis minima repudiandae eaque accusantium culpa nesciunt iusto. Qui esse tempore excepturi porro dolor perspiciatis asperiores, aliquam, soluta, expedita itaque aperiam!</p>
//         </div>

//         {/* sidd menu */}
//         <div className='px-4 h-max sticky top-8 '>
//           <h1>Authon</h1>
//           <div className='flex items-center gap-6'>
//             <img src="" alt="" className='rounded-full w-15 h-15' />
//             <Link>John dev</Link>
//           </div>
//           <p>Lorem ipsum dolor sit amet.</p>
//           <div className='flex gap-2'>
//               <Link>FaceBook</Link>
//               <Link>Instagram</Link>
//               <Link>Twitter</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SinglePostPage;

import React from 'react';
import Assets from '../assets/Assets';
import { Link } from 'react-router-dom';

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-10">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col lg:flex-row gap-8">

        {/* image first on mobile */}
        <div className="w-full order-1 lg:order-2">
          <img
            src={Assets.Spider}
            alt=""
            className="w-full md:w-400 h-55 sm:h-75 lg:h-full object-cover rounded-xl"
          />
        </div>

        {/* text */}
        <div className="flex flex-col gap-4 order-2 lg:order-1">

          {/* title */}
          <h1
            className="
              font-semibold
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              leading-tight
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Impedit, excepturi.
          </h1>

          {/* meta */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            <span>Written by</span>
            <Link className="text-blue-600">John dev</Link>
            <span>on</span>
            <Link className="text-blue-600">Web Design</Link>
            <span>4 days ago</span>
          </div>

          {/* description */}
          <p className="text-gray-500 text-sm sm:text-base max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iure rem tenetur provident placeat explicabo molestias?
          </p>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* article */}
        <div className="flex flex-col gap-6 text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse autem facilis neque, nihil id illum! Est, vitae corporis amet hic, atque, quod nisi quasi assumenda laborum ea fugiat similique rem consequatur nulla magnam eaque cumque. Nobis consequuntur veniam dolorum distinctio, ullam voluptatum officia est ducimus maxime porro quam magnam non voluptatibus inventore. Cumque eaque quas sequi nobis explicabo, eos, consectetur voluptate iste earum molestiae itaque ea laborum! Blanditiis mollitia quod voluptatem quibusdam ab delectus exercitationem, molestiae nulla illum tenetur, officiis et dolores dolore minima aliquid! Dolor eum sed nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse autem facilis neque, nihil id illum! Est, vitae corporis amet hic, atque, quod nisi quasi assumenda laborum ea fugiat similique rem consequatur nulla magnam eaque cumque. Nobis consequuntur veniam dolorum distinctio, ullam voluptatum officia est ducimus maxime porro quam magnam non voluptatibus inventore. Cumque eaque quas sequi nobis explicabo, eos, consectetur voluptate iste earum molestiae itaque ea laborum! Blanditiis mollitia quod voluptatem quibusdam ab delectus exercitationem, molestiae nulla illum tenetur, officiis et dolores dolore minima aliquid! Dolor eum sed nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse autem facilis neque, nihil id illum! Est, vitae corporis amet hic, atque, quod nisi quasi assumenda laborum ea fugiat similique rem consequatur nulla magnam eaque cumque. Nobis consequuntur veniam dolorum distinctio, ullam voluptatum officia est ducimus maxime porro quam magnam non voluptatibus inventore. Cumque eaque quas sequi nobis explicabo, eos, consectetur voluptate iste earum molestiae itaque ea laborum! Blanditiis mollitia quod voluptatem quibusdam ab delectus exercitationem, molestiae nulla illum tenetur, officiis et dolores dolore minima aliquid! Dolor eum sed nisi.</p>
          <img src={Assets.Astronaut2} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse autem facilis neque, nihil id illum! Est, vitae corporis amet hic, atque, quod nisi quasi assumenda laborum ea fugiat similique rem consequatur nulla magnam eaque cumque. Nobis consequuntur veniam dolorum distinctio, ullam voluptatum officia est ducimus maxime porro quam magnam non voluptatibus inventore. Cumque eaque quas sequi nobis explicabo, eos, consectetur voluptate iste earum molestiae itaque ea laborum! Blanditiis mollitia quod voluptatem quibusdam ab delectus exercitationem, molestiae nulla illum tenetur, officiis et dolores dolore minima aliquid! Dolor eum sed nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse autem facilis neque, nihil id illum! Est, vitae corporis amet hic, atque, quod nisi quasi assumenda laborum ea fugiat similique rem consequatur nulla magnam eaque cumque. Nobis consequuntur veniam dolorum distinctio, ullam voluptatum officia est ducimus maxime porro quam magnam non voluptatibus inventore. Cumque eaque quas sequi nobis explicabo, eos, consectetur voluptate iste earum molestiae itaque ea laborum! Blanditiis mollitia quod voluptatem quibusdam ab delectus exercitationem, molestiae nulla illum tenetur, officiis et dolores dolore minima aliquid! Dolor eum sed nisi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse autem facilis neque, nihil id illum! Est, vitae corporis amet hic, atque, quod nisi quasi assumenda laborum ea fugiat similique rem consequatur nulla magnam eaque cumque. Nobis consequuntur veniam dolorum distinctio, ullam voluptatum officia est ducimus maxime porro quam magnam non voluptatibus inventore. Cumque eaque quas sequi nobis explicabo, eos, consectetur voluptate iste earum molestiae itaque ea laborum! Blanditiis mollitia quod voluptatem quibusdam ab delectus exercitationem, molestiae nulla illum tenetur, officiis et dolores dolore minima aliquid! Dolor eum sed nisi.</p>
          <img src={Assets.Astronaut1} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse autem facilis neque, nihil id illum! Est, vitae corporis amet hic, atque, quod nisi quasi assumenda laborum ea fugiat similique rem consequatur nulla magnam eaque cumque. Nobis consequuntur veniam dolorum distinctio, ullam voluptatum officia est ducimus maxime porro quam magnam non voluptatibus inventore. Cumque eaque quas sequi nobis explicabo, eos, consectetur voluptate iste earum molestiae itaque ea laborum! Blanditiis mollitia quod voluptatem quibusdam ab delectus exercitationem, molestiae nulla illum tenetur, officiis et dolores dolore minima aliquid! Dolor eum sed nisi.</p>
        </div>

        {/* ================= SIDEBAR ================= */}
        <div
          className="
            w-full
            lg:w-[280px]
            h-max
            lg:sticky
            lg:top-25
            border-t
            lg:border-t-0
            lg:border-l
            border-gray-200
            pt-6
            lg:pt-0
            lg:pl-6
          "
        >
          <h1 className="font-semibold text-lg mb-4">Author</h1>

          <div className="flex items-center gap-4 mb-3">
            <img
              src={Assets.Tanjiro}
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
            <Link className="font-medium text-blue-600">
              John dev
            </Link>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex gap-4 text-sm text-blue-600">
            <Link>Facebook</Link>
            <Link>Instagram</Link>
            <Link>Twitter</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SinglePostPage;
