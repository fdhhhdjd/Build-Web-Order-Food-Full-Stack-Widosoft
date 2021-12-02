import React from "react";
import { WidgetLgs } from "../../Styles/StylePages/Admin/WidgetLgs";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <>
      <WidgetLgs />
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/p843x403/259136765_1583066602042883_8506228276574605631_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2eMcWMSL_1gAX_7Un0U&_nc_ht=scontent.fsgn2-1.fna&oh=66eaf35ba807962cc3f78890d50a60e5&oe=61A5CC17"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/p843x403/259136765_1583066602042883_8506228276574605631_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2eMcWMSL_1gAX_7Un0U&_nc_ht=scontent.fsgn2-1.fna&oh=66eaf35ba807962cc3f78890d50a60e5&oe=61A5CC17"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/p843x403/259136765_1583066602042883_8506228276574605631_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2eMcWMSL_1gAX_7Un0U&_nc_ht=scontent.fsgn2-1.fna&oh=66eaf35ba807962cc3f78890d50a60e5&oe=61A5CC17"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/p843x403/259136765_1583066602042883_8506228276574605631_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2eMcWMSL_1gAX_7Un0U&_nc_ht=scontent.fsgn2-1.fna&oh=66eaf35ba807962cc3f78890d50a60e5&oe=61A5CC17"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default WidgetLg;
