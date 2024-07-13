import img from '../../../images/favicon.png';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  const firstCol = [
    'About Us',
    'Our Blog',
    'Careers',
    'Store Locations',
    'Testimonial',
    'Sitemap',
  ];
  const secondCol = [
    'Help Center',
    'Shipping Info',
    'Returns',
    'How To Order',
    'How To Track',
    'Size Guide',
  ];

  return (
    <footer>
      <div className="grid gap-8 border-t-2 px-4 py-8 sm:h-[400px] sm:grid-cols-5 sm:px-20">
        <div className="flex flex-col items-start justify-start sm:col-span-2">
          <div className="flex items-center space-x-1 text-[#B91708]">
            <img src={img} className="h-24 object-cover" />
          </div>
          <p className="mt-2 text-xl">
            Reach us Monday {'-'} Friday from 9 am to 6 pm
          </p>
          <p className="text-sm">+1 001 234 5678</p>
          <div className="mt-4 flex gap-x-4 sm:mt-6">
            <FaSquareInstagram className="cursor-pointer text-4xl" />
            <FaFacebookSquare className="cursor-pointer text-4xl" />
            <FaSquareXTwitter className="cursor-pointer text-4xl" />
          </div>
        </div>
        <div>
          <h2 className="font-bold">COMPANY</h2>
          <div className="mt-4 flex flex-col gap-y-3 sm:mt-12">
            {firstCol.map((item, index) => (
              <a
                key={index}
                className="transition duration-150 hover:font-bold hover:text-orange-600"
                href={'#'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="">
          <h2 className="font-bold">HELP</h2>
          <div className="mt-4 flex flex-col gap-y-3 sm:mt-12">
            {secondCol.map((service, index) => (
              <a
                className="transition duration-150 hover:font-bold hover:text-orange-600"
                key={index}
                href={'#'}
              >
                {service}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold">NEWSLETTER</h2>
          <div className="mt-4 flex items-center justify-center sm:mt-12">
            <div className="grid w-full max-w-xs gap-4">
              <input
                type="text"
                className="h-10 w-full rounded border bg-white p-2 text-sm"
                placeholder="Enter your email"
              />
              <button className="rounded bg-black py-2 text-gray-50 hover:bg-orange-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-9 w-full items-center justify-center bg-black text-white">
        <h2>&copy; Copyright 2024 | Ecommerce</h2>
      </div>
    </footer>
  );
};

export default Footer;
