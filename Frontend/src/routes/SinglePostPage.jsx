import React from 'react';
import Assets from '../assets/Assets';
import { Link } from 'react-router-dom';
import PostActionmenu from '../components/PostActionmenu';
import SidebarSearch from '../components/SidebarSearch';
import Comments from '../components/Comments';

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
            lg:w-70
            h-max
            lg:sticky
            lg:top-24
            border-t
            lg:border-t-0
            lg:border-l
            border-gray-200
            pt-6
            lg:pt-0
            lg:pl-6
          "
        >
          <h1 className='mb-4 text-sm font-medium'>Author</h1>

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

          <PostActionmenu />

          <h1 className='mt-4 mb-2 text-sm font-medium'>Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className='underline'>All</Link>
            <Link className='underline'>Web Design</Link>
            <Link className='underline'>Development</Link>
            <Link className='underline'>Database</Link>
            <Link className='underline'>Search Engine</Link>
            <Link className='underline'>IOT</Link>
            <Link className='underline'>Backend</Link>
          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <SidebarSearch />
        </div>
      </div>

      {/* comments */}

      <Comments />
    </div>
  );
};

export default SinglePostPage;
