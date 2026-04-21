import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    console.log("Cargando gastos automáticamente...");
  }, []);

  return (
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-50 dark:bg-slate-950">
      <header class="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 backdrop-blur">
        <div class="mx-auto w-full max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="size-10 flex items-center justify-center rounded-xl bg-[#006600]/10">
              <svg class="text-[#006600] size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
              </svg>
            </div>
            <div class="flex flex-col leading-tight">
              <span class="text-slate-900 dark:text-slate-100 text-sm font-semibold">{user.nombres}</span>
              <span class="text-slate-600 dark:text-slate-400 text-xs">{user.documento}</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              New Expense
            </button>
            <button type="button" class="inline-flex items-center justify-center rounded-lg bg-[#006600] px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-[#006600]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2">
              Add Income
            </button>
          </div>
        </div>
      </header>

      <main class="mx-auto w-full max-w-6xl px-4 py-8 flex flex-col gap-8">
        <section class="flex flex-col gap-2">
          <h1 class="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Overview</h1>
          <p class="text-slate-600 dark:text-slate-400 text-sm">A quick snapshot of your finances.</p>
        </section>

        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
            <div class="flex items-start justify-between gap-3">
              <div class="flex flex-col gap-1">
                <p class="text-slate-600 dark:text-slate-400 text-sm font-semibold">Balance</p>
                <p class="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">$ 2,450.00</p>
              </div>
              <div class="size-10 rounded-lg bg-[#006600]/10 flex items-center justify-center">
                <svg class="size-5 text-[#006600]" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6v12m6-6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
              </div>
            </div>
            <p class="mt-3 text-xs text-slate-500 dark:text-slate-400">Updated just now</p>
          </div>

          <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
            <div class="flex items-start justify-between gap-3">
              <div class="flex flex-col gap-1">
                <p class="text-slate-600 dark:text-slate-400 text-sm font-semibold">Income (month)</p>
                <p class="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">$ 3,200.00</p>
              </div>
              <div class="size-10 rounded-lg bg-[#006600]/10 flex items-center justify-center">
                <svg class="size-5 text-[#006600]" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17l10-10M10 7h7v7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
            <p class="mt-3 text-xs text-slate-500 dark:text-slate-400">Compared to last month</p>
          </div>

          <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
            <div class="flex items-start justify-between gap-3">
              <div class="flex flex-col gap-1">
                <p class="text-slate-600 dark:text-slate-400 text-sm font-semibold">Expenses (month)</p>
                <p class="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">$ 750.00</p>
              </div>
              <div class="size-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <svg class="size-5 text-red-500" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 7L7 17M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
            <p class="mt-3 text-xs text-slate-500 dark:text-slate-400">Keep an eye on subscriptions</p>
          </div>
        </section>

        <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="lg:col-span-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <div class="flex flex-col">
                <h2 class="text-slate-900 dark:text-slate-100 text-base font-bold">Recent Transactions</h2>
                <p class="text-slate-600 dark:text-slate-400 text-sm">Latest movements in your account</p>
              </div>
              <button type="button" class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                View all
              </button>
            </div>

            <div class="divide-y divide-slate-200 dark:divide-slate-800">
              <div class="px-5 py-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <span class="text-slate-700 dark:text-slate-200 text-sm font-bold">F</span>
                  </div>
                  <div class="flex flex-col">
                    <p class="text-slate-900 dark:text-slate-100 text-sm font-semibold">Food</p>
                    <p class="text-slate-600 dark:text-slate-400 text-xs">Apr 08 • Card</p>
                  </div>
                </div>
                <p class="text-red-500 text-sm font-bold">- $ 24.50</p>
              </div>

              <div class="px-5 py-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <span class="text-slate-700 dark:text-slate-200 text-sm font-bold">T</span>
                  </div>
                  <div class="flex flex-col">
                    <p class="text-slate-900 dark:text-slate-100 text-sm font-semibold">Transport</p>
                    <p class="text-slate-600 dark:text-slate-400 text-xs">Apr 07 • Cash</p>
                  </div>
                </div>
                <p class="text-red-500 text-sm font-bold">- $ 12.00</p>
              </div>

              <div class="px-5 py-4 flex items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="size-10 rounded-lg bg-[#006600]/10 flex items-center justify-center">
                    <span class="text-[#006600] text-sm font-bold">S</span>
                  </div>
                  <div class="flex flex-col">
                    <p class="text-slate-900 dark:text-slate-100 text-sm font-semibold">Salary</p>
                    <p class="text-slate-600 dark:text-slate-400 text-xs">Apr 05 • Bank</p>
                  </div>
                </div>
                <p class="text-[#006600] text-sm font-bold">+ $ 3,200.00</p>
              </div>
            </div>
          </div>

          <div class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-col gap-4">
            <div class="flex items-center justify-between gap-4">
              <div class="flex flex-col">
                <h2 class="text-slate-900 dark:text-slate-100 text-base font-bold">Quick Actions</h2>
                <p class="text-slate-600 dark:text-slate-400 text-sm">Shortcuts for common tasks</p>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-3">
              <button type="button" class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Create category
              </button>
              <button type="button" class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Export report
              </button>
              <button type="button" class="inline-flex items-center justify-center rounded-lg bg-[#006600] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#006600]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2">
                Add transaction
              </button>
            </div>

            <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4">
              <p class="text-slate-900 dark:text-slate-100 text-sm font-semibold">Tip</p>
              <p class="text-slate-600 dark:text-slate-400 text-sm mt-1">Set a monthly budget to keep expenses under control.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Aquí van los gastos</p>
    </div>
  );
}

export default Dashboard;