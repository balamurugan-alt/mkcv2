import $ from 'jquery';
import { useEffect } from 'react';

interface PowerReviewsDisplay {
  display: {
    render: (options: {
      api_key: string;
      locale: string;
      merchant_group_id: string;
      merchant_id: string;
      page_id: string;
      style_sheet: string | undefined;
      on_submit: () => void;
      components: { Write: string };
    }) => void;
  };
}

const PowerReviews = () => {
  const renderPowerReviews = () => {
    let prStyleSheetOverride = $('#franks20-pr-overrides').attr('href');
    if (
      $('#franks20-pr-overrides-overridden') &&
      $('#franks20-pr-overrides-overridden').length > 0
    ) {
      prStyleSheetOverride = $('#franks20-pr-overrides-overridden').attr('href');
    }
    (
      window as Window & typeof window & { POWERREVIEWS: PowerReviewsDisplay }
    ).POWERREVIEWS.display.render({
      api_key: '658d707f-7e49-4a9d-b8ff-03a4066c50b7',
      locale: 'en_US',
      merchant_group_id: '1147045248',
      merchant_id: '1638795334',
      page_id: '423e5e6f-66e6-45a5-93f6-0ac38609abbf',
      style_sheet: prStyleSheetOverride,
      on_submit: () => {
        window.scrollTo(0, 0);
      },
      components: {
        Write: 'pr-write',
      },
    });
  };

  useEffect(() => {
    renderPowerReviews();
  }, []);

  return (
    <>
      <h1>Power Review</h1>
      <div id="pr-write" className="m-2"></div>
    </>
  );
};

export default PowerReviews;
