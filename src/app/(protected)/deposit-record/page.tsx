"use client";
import NoData from "@/components/no-data";
import SiteHeader from "@/components/SiteHeader";
import { useFetchDepositsRecordsQuery } from "@/lib/features/recordApiSlice";
import moment from "moment";
import React from "react";

const DepositRecord = () => {
  const { data, isLoading } = useFetchDepositsRecordsQuery();

  const deposits = data?.deposits;
  console.log({ deposits });
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader title="Deposits Records" />

      <div className="py-7 px-4">
        {data && deposits && deposits?.length < 0 && <NoData />}
        {data && !isLoading && (
          <div className="space-y-4">
            {deposits?.map((deposit) => (
              <div
                key={deposit.id}
                className="bg-white p-4 rounded-2xl shadow-md border border-gray-200"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      ৳ {deposit.amount.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                      Bonus: ৳ {+deposit!.bonus! || 0} ({deposit.bonusFor})
                    </p>
                  </div>
                  <div>
                    <span
                      className={`text-sm px-3 py-1 rounded-full font-medium ${
                        deposit.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-700"
                          : deposit.status === "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {deposit.status}
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-sm text-gray-600">
                  <p>
                    <b>Sender:</b> {deposit.senderNumber}
                  </p>
                  {deposit.trxID && (
                    <p>
                      <b>Transaction ID:</b> {deposit.trxID}
                    </p>
                  )}
                  <p>
                    <b>Tracking No:</b> {deposit.trackingNumber}
                  </p>
                  <p>
                    <b> Expires:</b>{" "}
                    {new Date(deposit.expire).toLocaleString("en-BD")}
                  </p>
                  <p>
                    <b>Created:</b> {moment(deposit.createdAt).calendar()}
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
