import React from "react";
import { useCartStore } from "../store/useCartStore";
import { useProductStore } from "../store/useProductStore";
import { Link } from "react-router-dom";

const TotalCost = () => {
  const { carts } = useCartStore();
  const { data_prodcuts } = useProductStore();

  const total = carts.reduce((preValue, currentValue) => {
    const cost =
      currentValue.quantity *
      data_prodcuts.find(({ id }) => id === currentValue.product_id).price;
    return preValue + cost;
  }, 0);

  const tax = (total / 10).toFixed(2);

  const discount = total / 30;

  const net_total = (Number(total) + Number(tax) - discount).toFixed(2);

  return (
    <div className="mt-8 flex justify-end border-t border-primary/85 pt-8">
      <div className="w-screen max-w-lg space-y-4">
        <dl className="space-y-0.5 text-sm text-primary/85">
          <div className="flex justify-between">
            <dt>TOTAL</dt>
            <dd>$ {total.toFixed(2)}</dd>
          </div>

          <div className="flex justify-between">
            <dt>TAX(10%)</dt>
            <dd>$ {tax}</dd>
          </div>

          <div className="flex justify-between">
            <dt>Discount</dt>
            <dd>$ {discount.toFixed(2)}</dd>
          </div>

          <div className="flex justify-between !text-base font-medium">
            <dt>NET Total</dt>
            <dd>$ {net_total}</dd>
          </div>
        </dl>

        <div className="flex justify-end pt-6">
          <Link
            to="/order-confirmation"
            className="block rounded bg-primary px-5 py-3 text-sm text-black transition hover:bg-primary/65"
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
