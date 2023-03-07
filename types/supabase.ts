export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      likes: {
        Row: {
          created_at: string;
          id: number;
          tweet_id: number;
          user_id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          tweet_id: number;
          user_id: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          tweet_id?: number;
          user_id?: number;
        };
      };
      tweets: {
        Row: {
          content: string | null;
          created_at: string;
          id: number;
          origin_tweet: number | null;
          user_id: number;
        };
        Insert: {
          content?: string | null;
          created_at?: string;
          id?: number;
          origin_tweet?: number | null;
          user_id: number;
        };
        Update: {
          content?: string | null;
          created_at?: string;
          id?: number;
          origin_tweet?: number | null;
          user_id?: number;
        };
      };
      users: {
        Row: {
          created_at: string;
          email: string;
          full_name: string;
          id: number;
          password: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          full_name: string;
          id?: number;
          password: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          full_name?: string;
          id?: number;
          password?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
