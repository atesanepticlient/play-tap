"use client";
import NoData from "@/components/no-data";
import SiteHeader from "@/components/SiteHeader";
import { useFetchWithdrawRecordsQuery } from "@/lib/features/recordApiSlice";
import React from "react";

const DepositRecord = () => {
  const { data, isLoading } = useFetchWithdrawRecordsQuery();
  console.log("Withdraw ", data);
  const withdraws = data?.withdraws;
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader title="Withdraws Records" />

      <div className="py-7 px-4">
        {withdraws && withdraws?.length == 0 && <NoData />}
        {data && !isLoading && (
          <div className="space-y-4">
            {withdraws?.map((withdraw) => (
              <div
                key={withdraw.id}
                className="bg-white p-4 rounded-2xl shadow-md border border-gray-200"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      ৳ {withdraw.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      <b>Card:</b> {withdraw.card?.cardNumber || "N/A"}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`text-sm px-3 py-1 rounded-full font-medium ${
                        withdraw.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-700"
                          : withdraw.status === "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {withdraw.status}
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-sm text-gray-600">
                  <p>
                    <b>Expires:</b>{" "}
                    {new Date(withdraw.expire).toLocaleString("en-BD")}
                  </p>
                  <p>
                    <b>Requested:</b>{" "}
                    {new Date(withdraw.createdAt).toLocaleString("en-BD")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        {(!data || isLoading) && (
          <div className="w-full h-screen flex items-center justify-center">
            <span>Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositRecord;
