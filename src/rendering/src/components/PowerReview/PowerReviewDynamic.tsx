import dynamic from 'next/dynamic';

const PowerReview = dynamic(() => import('./PowerReview'), { ssr: false });

export default function PowerReviewDynamic() {
  return <PowerReview />;
}
