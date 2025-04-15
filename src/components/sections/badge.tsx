import { TagEnum } from "@/types";
import classNames from "classnames";

interface TagProp {
  tag: TagEnum;
}

export const Badge = ({ tag }: TagProp) => {
  const styles = {
    OFFLINE: {
      bg: "bg-green-tag",
    },
    BACKEND: {
      bg: "bg-green-tag",
    },
    UI: {
      bg: "bg-red-tag",
    },
    DESIGN: {
      bg: "bg-red-tag",
    },
    TRAINING: {
      bg: "bg-todo-blue/50",
    },
    DOCUMENTATION: {
      bg: "bg-todo-blue/50",
    },
    RELEASE: {
      bg: "bg-low-tag",
    },
    APP_STORE: {
      bg: "bg-low-tag",
    },
    INFRASTRUCTURE: {
      bg: "bg-red-tag",
    },
    INTEGRATION: {
      bg: "bg-red-tag",
    },
    SOCIAL_MEDIA: {
      bg: "bg-green-tag",
    },
    BACKUP: {
      bg: "bg-green-tag",
    },
    DATABASE: {
      bg: "bg-red-tag",
    },
    FORM: {
      bg: "bg-low-tag",
    },
    REPORTING: {
      bg: "bg-low-tag",
    },
    DataAnalysis: {
      bg: "bg-red-tag",
    },
    DATA_ANALYSIS: {
      bg: "bg-low-tag",
    },
    SECURITY: {
      bg: "bg-green-tag",
    },
    QA: {
      bg: "bg-green-tag",
    },
    LOCALIZATION: {
      bg: "bg-red-tag",
    },
    DEBUGGING: {
      bg: "bg-red-tag",
    },
    MIGRATION: {
      bg: "bg-low-tag",
    },
    FEEDBACK: {
      bg: "bg-green-tag",
    },
    CONTENT: {
      bg: "bg-todo-blue/50",
    },
    WEB: {
      bg: "bg-red-tag",
    },
    OPTIMIZATION: {
      bg: "bg-low-tag",
    },
    NOTIFICATION: {
      bg: "bg-red-tag",
    },
    BUG_FIX: {
      bg: "bg-low-tag",
    },
    TESTING: {
      bg: "bg-todo-blue/50",
    },
    COMMUNICATION: {
      bg: "bg-todo-blue/50",
    },
    SEO: {
      bg: "bg-todo-blue/50",
    },
  };

  return (
    <>
      <span
        className={classNames(
          "w-full px-2 py-1 text-xs rounded-lg",
          styles[tag]?.bg
        )}
      >
        {tag}
      </span>
    </>
  );
};
