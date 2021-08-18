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
import Loader from '../../components/Loader/Loader';
import { HtmlCodeSnippetBuilder } from '../../features/htmlCodeSnippetBuilder/HtmlCodeSnippetBuilder';
import { MarkupHandler } from '../../features/markupHandler/MarkupHandler';
import { StylesHandler } from '../../features/stylesHandler/StylesHandler';

const HTML_SWIPER_HISTORY_KEY = 'snippet/html';
const HTML_SWIPER_DIRECTION = 'vertical';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, History, Mousewheel]);

const LOADING_MESSAGE = 'Loading Snippets...';

export interface CodeSnippetsProps {}

const CodeSnippets: React.FunctionComponent<CodeSnippetsProps> = () => {
  const dispatch = useAppDispatch();
  const { status: snippetsStatus } = useAppSelector(selectSnippetData);
  const htmlSnippetsData = useAppSelector(selectSnippetsArray);

  useEffect(() => {
    dispatch(fetchSnippetsAsync());
  }, []);

  const mapHtmlSnippetsArray = (snippetsData: IHtmlCodeSnippetEntity[]) =>
    snippetsData.map(htmlSnippet => {
      const markupHandler = new MarkupHandler();
      const stylesHandler = new StylesHandler(htmlSnippet);

      const snippetBuilder = new HtmlCodeSnippetBuilder(
        htmlSnippet,
        markupHandler,
        stylesHandler
      );

      return new HtmlCodeSnippet(snippetBuilder);
    });

  const codeSnippetsArray = [...mapHtmlSnippetsArray(htmlSnippetsData)];

  const renderSnippetSwiperSlide = (codeSnippet: ICodeSnippet) => {
    const snippetAsString = codeSnippet.getCodeSnippetAsString();
    const snippetId = codeSnippet.getSnippetId();

    return (
      <SwiperSlide data-history={snippetId} key={snippetId}>
        <CodeSnippet
          snippetRenderCode={() => htmlParse(snippetAsString)}
          snippetTypingCode={snippetAsString}
          language={codeSnippet.getSnippetCategory()}
        />
      </SwiperSlide>
    );
  };

  const renderLoader = () => (
    <div className="loader_container">
      <Loader loadingText={LOADING_MESSAGE} />
    </div>
  );

  const renderSwipper = () => (
    <Swiper
      direction={HTML_SWIPER_DIRECTION}
      pagination={{
        clickable: true,
      }}
      navigation
      slidesPerView={1}
      className="snippetsSwipper"
      history={{
        key: HTML_SWIPER_HISTORY_KEY,
      }}
    >
      {codeSnippetsArray.map(renderSnippetSwiperSlide)}
    </Swiper>
  );

  return snippetsStatus !== LOADING_STATUS ? renderSwipper() : renderLoader();
};
export default CodeSnippets;
