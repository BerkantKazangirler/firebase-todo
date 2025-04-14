import classNames from "classnames";
import { TagEnum, viewMapper } from "@/components/type";

interface TagProp {
  tag: TagEnum;
}

export const Badge = ({ tag }: TagProp) => {
  const styles = {
    Offline: {
      bg: "bg-green-tag",
    },
    Backend: {
      bg: "bg-green-tag",
    },
    UI: {
      bg: "bg-red-tag",
    },
    Training: {
      bg: "bg-todo-blue/50",
    },
    Documentation: {
      bg: "bg-todo-blue/50",
    },
    Release: {
      bg: "bg-low-tag",
    },
    AppStore: {
      bg: "bg-low-tag",
    },
    Infrastructure: {
      bg: "bg-red-tag",
    },
    Integration: {
      bg: "bg-red-tag",
    },
    SocialMedia: {
      bg: "bg-green-tag",
    },
    Backup: {
      bg: "bg-green-tag",
    },
    Database: {
      bg: "bg-red-tag",
    },
    Form: {
      bg: "bg-low-tag",
    },
    Reporting: {
      bg: "bg-low-tag",
    },
    DataAnalysis: {
      bg: "bg-red-tag",
    },
    Design: {
      bg: "bg-low-tag",
    },
    Security: {
      bg: "bg-green-tag",
    },
    QA: {
      bg: "bg-green-tag",
    },
    Localization: {
      bg: "bg-red-tag",
    },
    Debugging: {
      bg: "bg-red-tag",
    },
    Migration: {
      bg: "bg-low-tag",
    },
    Feedback: {
      bg: "bg-green-tag",
    },
    Content: {
      bg: "bg-todo-blue/50",
    },
    Web: {
      bg: "bg-red-tag",
    },
    Optimization: {
      bg: "bg-low-tag",
    },
    Notification: {
      bg: "bg-red-tag",
    },
    BugFix: {
      bg: "bg-low-tag",
    },
    Testing: {
      bg: "bg-todo-blue/50",
    },
    Communication: {
      bg: "bg-todo-blue/50",
    },
    SEO: {
      bg: "bg-todo-blue/50",
    },
  } as any;

  const style = styles[viewMapper(tag)];

  return (
    <>
      <span className={classNames("w-full px-2 py-1 rounded-lg", style.bg)}>
        {tag}
      </span>
    </>
  );
};
