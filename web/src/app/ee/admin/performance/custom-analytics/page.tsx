import { AdminPageTitle } from "@/components/admin/Title";
import { CUSTOM_ANALYTICS_ENABLED } from "@/lib/constants";
import { Callout, Text } from "@tremor/react";
import { FiBarChart2 } from "react-icons/fi";
import { CustomAnalyticsUpdateForm } from "./CustomAnalyticsUpdateForm";

function Main() {
  if (!CUSTOM_ANALYTICS_ENABLED) {
    return (
      <div>
        <div className="mt-4">
          <Callout title="Custom Analytics is not enabled." color="red">
            To set up custom analytics scripts, please work with the team who
            setup Danswer in your organization to set the{" "}
            <i>CUSTOM_ANALYTICS_SECRET_KEY</i> environment variable.
          </Callout>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Text className="mb-8">
        This allows you to bring your own analytics tool to Danswer! Copy the
        Web snippet from your analytics provider into the box below, and we'll
        start sending usage events.
      </Text>

      <CustomAnalyticsUpdateForm />
    </div>
  );
}

export default function Page() {
  return (
    <main className="pt-4 mx-auto container">
      <AdminPageTitle
        title="Custom Analytics"
        icon={<FiBarChart2 size={32} />}
      />

      <Main />
    </main>
  );
}
