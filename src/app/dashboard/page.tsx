import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex lg:max-w-[calc(100%-var(--sidebar-width))] flex-col gap-4 p-4 pt-0">
          <div className="bg-muted/50 min-h-[100vh] min-w-full  rounded-xl md:min-h-min text-3xl flex  gap-2 overflow-x-scroll">
            {/*w-[150px] h-[200px] bg-red-500 flex-none*/}
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
            <div className="w-[150px] h-[200px] bg-red-500 flex-none"></div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
