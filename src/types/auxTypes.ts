
export type ImgDetailData = {
  height: string;
  size: string;
  url: string;
  width: string;
}

export type ImgTypes = {
  "480w_still": ImgDetailData;
  downsized: ImgDetailData;
  downsized_large: ImgDetailData;
  downsized_medium: ImgDetailData;
  downsized_small: ImgDetailData;
  downsized_still: ImgDetailData;
  fixed_height: ImgDetailData;
  fixed_height_downsampled: ImgDetailData;
  fixed_height_small: ImgDetailData;
  fixed_height_small_still: ImgDetailData;
  fixed_height_still: ImgDetailData;
  fixed_width: ImgDetailData;
  fixed_width_downsampled: ImgDetailData;
  fixed_width_small: ImgDetailData;
  fixed_width_small_still: ImgDetailData;
  fixed_width_still: ImgDetailData;
  looping: ImgDetailData;
  original: ImgDetailData;
  original_mp4: ImgDetailData;
  original_still: ImgDetailData;
  preview: ImgDetailData;
  preview_gif: ImgDetailData;
  preview_webp: ImgDetailData;
}

export type UserData = {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  display_name: string;
  is_verified: boolean;
  profile_url: string;
  username: string;
}

export type RespDataGiphy = {
  id: string;
  title: string;
  url: string;
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  featured_tags: string[];
  images: ImgTypes;
  import_datetime: string;
  is_sticker: number;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  tags: string[];
  trending_datetime: string;
  type: string;
  user: UserData;
  user_tags: string[];
  username: string;
}
