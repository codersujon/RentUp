import React from 'react';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';
import RecentCard from '../../components/Home/Recent/RecentCard';

const Blog = () => {
  return (
    <>
        <section className="blog">
            <Breadcrumb
                name="Blog"
                title="Blog Grid - Our Blogs"
                cover="assets/images/about/about.jpg"
            />
            <div className="blog__content pt-80 pb-80">
               <div className="container">
                    <RecentCard />
               </div>
            </div>
        </section>
    </>
  )
}

export default Blog