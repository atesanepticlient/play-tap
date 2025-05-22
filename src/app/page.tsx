// import AnnouncementModal from "@/components/announcement-modal";
import Footer from "@/components/Footer";
import HomeApp from "@/components/HomeApp";
import AppLayout from "./app-layout";

export default function Home() {
  return (
    <AppLayout>
      <HomeApp />
      <Footer />
      {/* <AnnouncementModal /> */}
    </AppLayout>
  );
}
