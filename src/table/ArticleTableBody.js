import React, { Component, Children } from 'react';

class ArticleTableBody extends Component {
  render() {
    return (
      <tbody>
        <tr className = "table-row">
            {
                this.props.content.map((item, index) => {
                    return(
                    <td className="table-column" key={index}>{item}</td>
                    )
                })
            }
        </tr>
      </tbody>
    )
  }
}
 
export default ArticleTableBody;