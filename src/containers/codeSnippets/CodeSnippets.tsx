import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import htmlParse from 'html-react-parser';
import SwiperCore, {
  Pagination,
  Navigation,
  History,
  Mousewheel,
} from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import { useAppDispatch, useAppSelector } from '../../hooks/AppHooks';
import { useSimulateTyping } from '../../hooks/useSimulateTyping';
import { fetchSnippetsAsync } from '../../slices/snippets/snippetsActions';
import {
  selectSnippetData,
  selectSnippetsArray,
} from '../../slices/snippets/snippetsSelectos';

import './CodeSnippets.css';

import { LOADING_STATUS } from '../../constants/status';
import { HtmlCodeSnippet } from '../../features/htmlCodeSnippet/HtmlCodeSnippet';
import { PrintCodeSnippets } from '../../features/printCodeSnippets/PrintCodeSnippets';

const MACBOOK_IMAGE =
  'https://www.apple.com/v/macbook-air/j/images/meta/macbook-air_overview__15sjf4iagj6q_og.png?202106280921';
const HTML_SWIPER_HISTORY_KEY = 'snippet/html';
const HTML_SWIPER_DIRECTION = 'vertical';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, History, Mousewheel]);

export interface CodeSnippetsProps {}

const CodeSnippets: React.FunctionComponent<CodeSnippetsProps> = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(selectSnippetData);
  const htmlSnippetsData = useAppSelector(selectSnippetsArray);

  const [typedLoading] = useSimulateTyping('Loading ...');
  const [snippetTyping, setSnippetTyping] = useState('');

  useEffect(() => {
    dispatch(fetchSnippetsAsync());
  }, []);

  useEffect(() => {
    if (htmlSnippetsData.length > 0) {
      const snippets = htmlSnippetsData.map(
        htmlSnippet => new HtmlCodeSnippet(htmlSnippet)
      );

      const snippetsPrinter = new PrintCodeSnippets(snippets);

      setSnippetTyping(snippetsPrinter.getPrintableArray()[0]);
    }
  }, [htmlSnippetsData]);

  return (
    <Swiper
      direction={HTML_SWIPER_DIRECTION}
      pagination
      navigation
      mousewheel
      slidesPerView={1}
      className="mySwiper"
      history={{
        key: HTML_SWIPER_HISTORY_KEY,
      }}
    >
      <SwiperSlide data-history="1">
        {status === LOADING_STATUS ? typedLoading : htmlParse(snippetTyping)}
      </SwiperSlide>
      <SwiperSlide data-history="2">
        <img alt="macbook air" src={MACBOOK_IMAGE} />
      </SwiperSlide>
    </Swiper>
  );
};
export default CodeSnippets;
