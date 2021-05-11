import React from 'react';
 
function ArticleTable(props) {
  const { headersName, children } = props;
  return (
    <table>
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <td key={index}>{ item }</td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </table>
  )
}
 
export default ArticleTable;