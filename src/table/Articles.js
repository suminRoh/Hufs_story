import React from 'react';
import ArticleTable from './ArticleTable';
import ArticleTableColumn from './ArticleTableColumn';
import ArticleTableRow from './ArticleTableRow';
 
function Articles({props}) {
  return (
    <div>
      <ArticleTable headersName={['글번호', '분류','제목', '만료일', '참여인원']}>
        <ArticleTableRow>
          <ArticleTableColumn>1</ArticleTableColumn>
          <ArticleTableColumn>도서관</ArticleTableColumn>
          <ArticleTableColumn>도서관 관련 청원글</ArticleTableColumn>
          <ArticleTableColumn>2021-05-12</ArticleTableColumn>
          <ArticleTableColumn>15</ArticleTableColumn>
        </ArticleTableRow>
        <ArticleTableRow>
          <ArticleTableColumn>2</ArticleTableColumn>
          <ArticleTableColumn>편의시설</ArticleTableColumn>
          <ArticleTableColumn>편의시설 관련 청원글</ArticleTableColumn>
          <ArticleTableColumn>2021-05-12</ArticleTableColumn>
          <ArticleTableColumn>12</ArticleTableColumn>
        </ArticleTableRow>
        <ArticleTableRow>
          <ArticleTableColumn>3</ArticleTableColumn>
          <ArticleTableColumn>교육</ArticleTableColumn>
          <ArticleTableColumn>교육 관련 청원글</ArticleTableColumn>
          <ArticleTableColumn>2021-05-12</ArticleTableColumn>
          <ArticleTableColumn>45</ArticleTableColumn>
        </ArticleTableRow>
        <ArticleTableRow>
          <ArticleTableColumn>4</ArticleTableColumn>
          <ArticleTableColumn>기숙사</ArticleTableColumn>
          <ArticleTableColumn>기숙사 관련 청원글</ArticleTableColumn>
          <ArticleTableColumn>2020-10-25</ArticleTableColumn>
          <ArticleTableColumn>50</ArticleTableColumn>
        </ArticleTableRow>
        <ArticleTableRow>
          <ArticleTableColumn>5</ArticleTableColumn>
          <ArticleTableColumn>복지</ArticleTableColumn>
          <ArticleTableColumn>복지 관련 청원글</ArticleTableColumn>
          <ArticleTableColumn>2021-05-12</ArticleTableColumn>
          <ArticleTableColumn>10</ArticleTableColumn>
        </ArticleTableRow>
      </ArticleTable>
    </div>
  )
}
 
export default Articles;