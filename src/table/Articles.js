import React from 'react';
import ArticleTableHead from './ArticleTableHead';
import ArticleTableBody from './ArticleTableBody';
import './Table.css'
 
function Articles({props}) {
  return (
    <div>
      <table className = "table"> 
        <ArticleTableHead headersName = {['글번호', '분류', '제목', '만료일', '청원인원']}></ArticleTableHead>
        <ArticleTableBody content = {
          ['1', '도서관', '도서관 관련 청원글', '2021-05-12', '15']
        }></ArticleTableBody>

        <ArticleTableBody content = {
          ['1', '도서관', '도서관 관련 청원글', '2021-05-12', '15']
        }></ArticleTableBody>

        <ArticleTableBody content = {
          ['1', '도서관', '도서관 관련 청원글', '2021-05-12', '15']
        }></ArticleTableBody>

        <ArticleTableBody content = {
          ['1', '도서관', '도서관 관련 청원글', '2021-05-12', '15']
        }></ArticleTableBody>

        <ArticleTableBody content = {
          ['1', '도서관', '도서관 관련 청원글', '2021-05-12', '15']
        }></ArticleTableBody>
      </table>
    </div>
  )
}
 
export default Articles;