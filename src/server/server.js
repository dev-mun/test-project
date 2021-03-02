// Here https access is controlled 

const baseUrl = "https://api.fda.gov/food";

export function fetchTableData() {
  const url = baseUrl + "/enforcement.json?limit=1000";
  return fetch(url).then(handleResponse).catch(handleError);
}

async function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error("Somthing went wrong status code: " + response.status);
}

function handleError(error) {
  console.error("API Error : " + error);
  throw error;
}

export const columns=[
    {title:'Country', field:'country'},
    {title:'City', field:'city'},
    {title:'Address_1', field:'address_1'},
    {title:'Address_2', field:'address_2'},
    {title:'Reson for Recall', field:'reason_for_recall'},
    {title:'Product Quantity', field:'product_quantity'},
    {title:'Code Info', field:'code_info'},
    {title:'Center Classification Date', field:'center_classification_date'},
    {title:'Distribution_Pattern', field:'distribution_pattern'},
    {title:'State', field:'state'},
    {title:'Product Description', field:'product_description'},
    {title:'Classification ', field:'classification'},
    // {title:'openfda ', field:'openfda'},
    {title:'Recall Number', field:'recall_number'},
    {title:'Recalling Firm', field:'recalling_firm'},
    {title:'Initial Firm Notification', field:'initial_firm_notification'},
    {title:'Product Type', field:'product_type'},
    {title:'Event Id', field:'event_id'},
    {title:'Termination Date', field:'termination_date'},
    {title:'More Code Info', field:'more_code_info'},
    {title:'Recall Initiation Date', field:'recall_initiation_date'},
    {title:'Postal Code', field:'postal_code'},
    {title:'Voluntary Mandated', field:'voluntary_mandated'},
    {title:'Status', field:'status'}
]