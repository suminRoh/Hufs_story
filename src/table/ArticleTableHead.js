import React, { Component} from 'react';

class ArticleTableHead extends Component {
  render() {
    return (
      <thead>
        <tr className = "table-row">
            {
              this.props.headersName.map((item, index) => {
                return(
                  <td className="table-header-column" key={index}>{item}</td>
                )
              })
            }
        </tr>
      </thead>
    )
  }
}
 
export default ArticleTableHead;