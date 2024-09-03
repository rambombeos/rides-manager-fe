
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Contents } from "./components/Contents"

const mockData = {
    overview: {
        totalRevenue: "$45,231.89",
        subscriptions: "+2350",
        sales: "+12,234",
        activeNow: "+573"
    },
    rides: {
        totalRides: "1,234",
        averageRideLength: "15 min",
        topDestination: "Downtown",
        riderSatisfaction: "4.8/5"
    },
    reports: {
        monthlyRevenue: "$67,890",
        topPerformingDriver: "John Doe",
        incidentReports: "5",
        averageResponseTime: "3 min"
    },
    events: {
        upcomingEvents: "3",
        lastEventAttendance: "500+",
        popularEventType: "Music Festival",
        eventSatisfactionRate: "95%"
    }
}

export default function DashboardPage() {
    return (
        <>
            <div className="hidden flex-col md:flex">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Rides Management App</h2>
                    </div>
                    <Tabs defaultValue="overview" className="space-y-4 w-full">
                        <TabsList className="w-full">
                            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                            <TabsTrigger value="rides" className="flex-1">Rides</TabsTrigger>
                            <TabsTrigger value="reports" className="flex-1">Reports</TabsTrigger>
                            <TabsTrigger value="events" className="flex-1">Events</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="space-y-4 w-full">
                            <Contents data={mockData.overview} />
                        </TabsContent>
                        <TabsContent value="rides" className="space-y-4 w-full">
                            <Contents data={mockData.rides} />
                        </TabsContent>
                        <TabsContent value="reports" className="space-y-4 w-full">
                            <Contents data={mockData.reports} />
                        </TabsContent>
                        <TabsContent value="events" className="space-y-4 w-full">
                            <Contents data={mockData.events} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}
