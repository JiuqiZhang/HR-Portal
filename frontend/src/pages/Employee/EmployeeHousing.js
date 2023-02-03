import * as React from 'react';
import ReportTable from "../../components/ReportTable";
import NewReportModal from "../../components/NewReportModal";

export default function EmployeeHousing() {
  return (
    <>
      <NewReportModal />
      <ReportTable />
    </>
  )
}
