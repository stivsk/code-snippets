import React, { useEffect } from 'react';
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
import CodeSnippet from '../../components/CodeSnippet/CodeSnippet';
import { IHtmlCodeSnippetEntity } from '../../interfaces/IHtmlCodeSnippetEntity';
import { ICodeSnippet } from '../../interfaces/ICodeSnippet';

const HTML_SWIPER_HISTORY_KEY = 'snippet/html';
const HTML_SWIPER_DIRECTION = 'vertical';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, History, Mousewheel]);

export interface CodeSnippetsProps {}

const CodeSnippets: React.FunctionComponent<CodeSnippetsProps> = () => {
  const dispatch = useAppDispatch();
  const { status: snippetsStatus } = useAppSelector(selectSnippetData);
  const htmlSnippetsData = useAppSelector(selectSnippetsArray);

  const [typedLoading] = useSimulateTyping('Loading Snippets...', 40);

  useEffect(() => {
    dispatch(fetchSnippetsAsync());
  }, []);

  const mapHtmlSnippetsArray = (snippetsData: IHtmlCodeSnippetEntity[]) =>
    snippetsData.map(htmlSnippet => new HtmlCodeSnippet(htmlSnippet));

  const codeSnippetsArray = [...mapHtmlSnippetsArray(htmlSnippetsData)];

  const renderSnippetSwiperSlide = (
    codeSnippet: ICodeSnippet,
    index: number
  ) => {
    const snippetAsString = codeSnippet.getCodeSnippetAsString();

    return (
      <SwiperSlide data-history={index} key={codeSnippet.id}>
        <CodeSnippet
          snippetRenderCode={() => htmlParse(snippetAsString)}
          snippetTypingCode={snippetAsString}
          language={codeSnippet.category}
        />
      </SwiperSlide>
    );
  };

  return (
    <Swiper
      direction={HTML_SWIPER_DIRECTION}
      pagination
      navigation
      slidesPerView={1}
      className="snippetsSwipper"
      history={{
        key: HTML_SWIPER_HISTORY_KEY,
      }}
    >
      {snippetsStatus !== LOADING_STATUS ? (
        codeSnippetsArray.map(renderSnippetSwiperSlide)
      ) : (
        <SwiperSlide data-history={0}>
          <h3>{typedLoading}</h3>
        </SwiperSlide>
      )}
    </Swiper>
  );
};
export default CodeSnippets;
