import Image from 'next/image'

const ProfileImage = () => {
    return (
        <Image
            src='/images/profile_image.jpg'
            height={144}
            width={144}
            alt={'Your name'}
        />
    )
}

export default ProfileImage