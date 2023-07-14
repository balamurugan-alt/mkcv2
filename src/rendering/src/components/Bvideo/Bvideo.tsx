import dynamic from 'next/dynamic';

const ComponentWithNoSSR = dynamic(() => import('./Video'), { ssr: false });
function Bvideo() {
  return (
    <>
      <ComponentWithNoSSR />
    </>
  );
}

export default Bvideo;
