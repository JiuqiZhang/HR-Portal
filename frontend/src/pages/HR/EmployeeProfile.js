import * as React from 'react';
import ProfileTable from "../../components/Profile.js/ProfileTable";
import ProfileSearch from "../../components/Profile.js/ProfileSearch";

export default function EmployeeProfile() {
  return (
    <>
      <ProfileSearch />
      <ProfileTable />
    </>
  )
}