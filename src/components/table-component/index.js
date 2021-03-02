import React from "react";
import MaterialTable from "material-table";
import { fetchTableData } from "../../server/server";
import { columnsForFirstTable } from "../../shared/constants";

//This component is used to view the data fetched from api as table view
class TableComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetchTableData()
      .then((resp) => {
        this.setState({ data: resp.results });
      })
      .catch((err) => console.log("Error in fetching table data", err));
  }

  render() {
    return (
      <React.Fragment>
        <h2>Open FDA Food Enforcement</h2>
        <React.Fragment>
          {this.state.data && (
            <MaterialTable
              title="Recall Enforcement Reports"
              data={this.state.data}
              columns={columnsForFirstTable}
              options={{
                search: true,
                paging: true,
                filtering: true,
                exportButton: true,
              }}
            />
          )}
        </React.Fragment>
      </React.Fragment>
    );
  }
}
export default TableComponent;
