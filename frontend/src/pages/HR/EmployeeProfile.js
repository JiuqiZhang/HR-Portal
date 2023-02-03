import * as React from 'react';
import ProfileTable from "../../components/Profile/ProfileTable";
import ProfileSearch from "../../components/Profile/ProfileSearch";

export default function EmployeeProfile() {
  return (
    <>
      <ProfileSearch />
      <ProfileTable />
    </>
  )
}